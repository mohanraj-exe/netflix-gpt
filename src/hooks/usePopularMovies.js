import { useDispatch } from "react-redux";
import {
  TMDB_BASE_URL,
  TMDB_FETCH_HEADER,
  TMDB_POPULAR_MOVIES_API,
} from "../utils/constants";
import { addP, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const fetchRes = await fetch(
      TMDB_BASE_URL + TMDB_POPULAR_MOVIES_API,
      TMDB_FETCH_HEADER,
    );
    const jsonRes = await fetchRes.json();
    // console.log(jsonRes);

    dispatch(addPopularMovies(jsonRes.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
