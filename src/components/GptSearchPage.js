import { useEffect } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { addGptMovieResult, addTMDBSearchResult } from "../utils/gptSlice";

const GptSearchPage = () => {
  return (
    <div className="relative top-25 w-[95%] mx-auto my-0">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
