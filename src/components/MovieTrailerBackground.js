import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import MovieTrailerBackgroundInfo from "./MovieTrailerBackgroundInfo";

const MovieTrailerBackground = ({ movieId }) => {
  // console.log(movieId);
  useMovieTrailer(movieId);
  const movieTrailerData = useSelector((store) => store.movies?.movieTrailer);

  return (
    <div className="movie-trailer-background relative">
      <iframe
        className="aspect-video absolute"
        // height="500"
        // width="500"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailerData?.key +
          "?playlist=" +
          movieTrailerData?.key +
          "&loop=1&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailerBackground;
