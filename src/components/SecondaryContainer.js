import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies,
  );
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  if (!nowPlayingMovies || !topRatedMovies || !upComingMovies || !popularMovies) return;

  return (
    <div className="bg-black">
      <div className="relative my-0 mx-auto">
        <MovieList title={"Now playing"} movies={nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upComingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
