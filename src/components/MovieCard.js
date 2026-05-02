import { useNavigate } from "react-router";
import { IMG_CDN_URL } from "../utils/constants";
import { addMovieTrailer, addWatchingMovie, clearWatchingMovie, showBrowsePageTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movieData, posterPath }) => {
  // console.log(movieId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMovie = (movieData) => {
    console.log("movie card data", movieData);
    
    dispatch(addWatchingMovie(movieData));
    dispatch(showBrowsePageTrailer(false));
    navigate(`/watch/${movieData.id}`);
  }

  return (
    <div className="w-48 px-2 cursor-pointer" onClick={() => handleMovie(movieData)}>
      <img
        className="rounded-md"
        alt="movie_card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
