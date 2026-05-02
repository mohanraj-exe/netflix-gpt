import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieTrailerBackground from "./MovieTrailerBackground";
import MovieTrailerBackgroundInfo from "./MovieTrailerBackgroundInfo";
import {
  clearWatchingMovie,
  showBrowsePageTrailer,
} from "../utils/moviesSlice";

const WatchingMovie = () => {
  const showTrailer = useSelector(
    (store) => store.movies?.browsePageShowTrailer,
  );

  const watchingMovie = useSelector((store) => store.movies?.watchingMovie);
  // console.log(watchingMovie);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(showBrowsePageTrailer(true));
      dispatch(clearWatchingMovie());
      console.log("Component unmounts");
    };
  }, []);

  if (!watchingMovie || showTrailer) return;

  return (
    <div className="main-movie-container h-[80lvh]">
      <MovieTrailerBackground movie={watchingMovie} />
    </div>
  );
};

export default WatchingMovie;
