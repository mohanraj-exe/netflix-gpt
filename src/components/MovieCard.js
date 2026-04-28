import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-2">
        <img className="rounded-md" alt="movie_card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
