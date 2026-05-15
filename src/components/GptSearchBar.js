import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { lang } from "../utils/languageConstant";
import { useRef, useState } from "react";
import { addGptMovieResult } from "../utils/gptSlice";
import useGptMovieSearch from "../hooks/useGptMovieSearch";
import createApiHelper from "../utils/createApiHelper";
import { LIVE_FIREBASE_FUNCTION_GEMINI_API_URL } from "../utils/constants";

const GptSearchBar = () => {
  const selected = useSelector((store) => store.config?.lang);
  const moviesName = useSelector((store) => store.gpt?.moviesName);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  useGptMovieSearch(moviesName);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchText.current.value) return;

    try {
      const fetchRes = await fetch(
        LIVE_FIREBASE_FUNCTION_GEMINI_API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: searchText.current.value,
          }),
        },
      );

      const jsonRes = await fetchRes.json();
      const moviesList = jsonRes?.data?.candidates?.[0]?.content?.parts?.[0]?.text.split(", ");

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
