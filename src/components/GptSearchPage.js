import { useEffect } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { addGptMovieResult, addTMDBSearchResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative top-25 w-[95%] mx-auto my-0">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
