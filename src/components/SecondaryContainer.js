import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="relative -top-5 my-0 mx-auto">
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
