import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import MovieTrailerBackgroundInfo from "./MovieTrailerBackgroundInfo";
import {
  YT_EMBED_URL_BASE,
  YT_EMBED_URL_LOOP_AUTO_MUTE_CONTROLS,
  YT_EMBED_URL_PLAYLIST,
} from "../utils/constants";

const MovieTrailerBackground = ({ movie }) => {
  const showTrailer = useSelector(
    (store) => store.movies?.browsePageShowTrailer,
  );
  useMovieTrailer(movie);

  let video;

  if (showTrailer) {
    video = useSelector((store) => store.movies?.movieTrailerVideo);
    // console.log("show trailer:", video);
  } else {
    video = useSelector((store) => store.movies?.watchingMovieVideo);
    // console.log("watching movie:", video);
  }

  if (!video) return;

  return (
    <div className="movie-trailer-background relative">
      <iframe
        className="aspect-video absolute"
        // height="500"
        // width="500"
        src={
          showTrailer
            ? `${YT_EMBED_URL_BASE + video?.key + YT_EMBED_URL_PLAYLIST + video?.key + YT_EMBED_URL_LOOP_AUTO_MUTE_CONTROLS}`
            : `${YT_EMBED_URL_BASE + video?.key}`
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
