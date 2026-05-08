import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useEffect } from "react";
import GptSearchPage from "./GptSearchPage";
import ComponentError from "./ComponentError";
import { useNavigate } from "react-router";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const error = useSelector((store) => store.error);
  const navigate = useNavigate();

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  if (error) return <ComponentError />;

  return (
    <div className="browse">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
        Main container
          - Movie trailer video background
          - Movie trailer video background info - Title, Description Play now button, More info button

        Secondary container
          - Movie list * n
           - Movie card * n
      */}
    </div>
  );
};

export default Browse;
