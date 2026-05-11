import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { lang } from "../utils/languageConstant";
import { useRef, useState } from "react";
import client from "../utils/genai";
import aiQueryHelper from "../utils/aiQueryHelper";
import { addGptMovieResult } from "../utils/gptSlice";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const selected = useSelector((store) => store.config?.lang);
  const moviesName = useSelector((store) => store.gpt?.moviesName);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  useGptMovieSearch(moviesName);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchText.current.value) return;
    const gptQuery = aiQueryHelper(searchText.current.value);

    // genai
    try {
      const completion = await client.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: gptQuery,
      });

      const moviesList = completion?.candidates?.[0]?.content?.parts?.[0]?.text.split(", ");

      dispatch(addGptMovieResult(moviesList));
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <form
        className="flex justify-center items-center gap-2"
        onSubmit={handleSearch}
      >
        <input
          className="p-2 border-2 rounded-sm w-[35%]"
          type="text"
          placeholder={lang?.[selected]?.gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          type="submit"
          className="bg-rose-500 text-white px-3 py-2 rounded-md cursor-pointer"
        >
          {lang?.[selected]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
