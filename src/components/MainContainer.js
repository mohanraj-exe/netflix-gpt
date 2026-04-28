import React from "react";
import { useSelector } from "react-redux";
import MovieTrailerBackground from "./MovieTrailerBackground";
import MovieTrailerBackgroundInfo from "./MovieTrailerBackgroundInfo";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movieData);

  if (!movieData) return;

  const { original_title, overview, id } = movieData[3];
  // console.log(original_title, overview, id);

  return (
    <div className="main-movie-container h-screen">
      <MovieTrailerBackground movieId={id}/>
      <MovieTrailerBackgroundInfo title={original_title} overview={overview}/>
    </div>
  );
};

export default MainContainer;
