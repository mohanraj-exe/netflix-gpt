import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(title, movies);
  return (
    <div className="mb-4">
      <h2 className="text-3xl mt-4 mb-2 text-white ml-3">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
