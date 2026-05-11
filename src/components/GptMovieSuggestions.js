import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const moviesName = useSelector((store) => store.gpt?.moviesName);
  const TMDB_Search_Results = useSelector((store) => store.gpt?.movieResults);

  if (!moviesName || !TMDB_Search_Results) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {moviesName?.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={TMDB_Search_Results[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
