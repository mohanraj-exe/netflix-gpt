import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const MovieTrailerBackgroundInfo = ({ title, overview }) => {
  return (
    <div className="absolute w-screen top-[35%] left-[5%] max-w-[40%] text-white">
      <h2 className="text-3xl font-bold">{title}</h2>
      <h2 className="text-xl mt-2">{overview}</h2>
      <div className="mt-3">
        <button className="bg-black text-white py-1.5 px-5 mr-2 border rounded-lg cursor-pointer">
          Play
        </button>
        <button className="bg-black text-white py-1.5 px-5 border rounded-lg cursor-pointer">
          More info
        </button>
      </div>
    </div>
  );
};

export default MovieTrailerBackgroundInfo;
