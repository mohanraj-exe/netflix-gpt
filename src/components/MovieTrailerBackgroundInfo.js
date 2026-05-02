import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addWatchingMovie, showBrowsePageTrailer } from "../utils/moviesSlice";

const MovieTrailerBackgroundInfo = ({ title, overview }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTrailer = (e) => {
    console.log(e);
    dispatch(showBrowsePageTrailer(false));
    dispatch(addWatchingMovie(movieTrailer));
    navigate(`/watch/${movieTrailer?.id}`);
  };

  return (
    <div className="absolute w-screen top-[30%] left-[5%] max-w-[30%] text-white">
      <h2 className="text-4xl font-bold">{title}</h2>
      <h2 className="text-sm mt-2">{overview}</h2>
      <div className="mt-3">
        <button
          className="bg-white text-black py-1.5 px-5 mr-2 rounded-lg cursor-pointer"
          onClick={handleTrailer}
        >
          Play
        </button>
        <button
          className="bg-gray-500 text-white py-1.5 px-5 rounded-lg cursor-pointer"
          onClick={handleTrailer}
        >
          More info
        </button>
      </div>
    </div>
  );
};

export default MovieTrailerBackgroundInfo;
