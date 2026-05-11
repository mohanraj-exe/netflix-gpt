import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieTrailerBackground from "./MovieTrailerBackground";
import MovieTrailerBackgroundInfo from "./MovieTrailerBackgroundInfo";
import {
  clearWatchingMovie,
  showBrowsePageTrailer,
} from "../utils/moviesSlice";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movies?.nowPlayingMovies);

  const showTrailer = useSelector(
    (store) => store.movies?.browsePageShowTrailer,
  );

  if (!movieData || !showTrailer) return;

  let { original_title, overview, id } = movieData[0];

  return (
    <div className="main-movie-container h-[80lvh]">
      <MovieTrailerBackground movie={movieData[0]} />
      <MovieTrailerBackgroundInfo title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
