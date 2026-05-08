import { useDispatch } from "react-redux";
import {
  TMDB_BASE_URL,
  TMDB_FETCH_HEADER,
  TMDB_TOP_RATED_MOVIES_API,
} from "../utils/constants";
import { addT, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import createApiHelper from "../utils/createApiHelper";
import { addError } from "../utils/errorSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const fetchRes = await fetch(
        TMDB_BASE_URL + TMDB_TOP_RATED_MOVIES_API,
        TMDB_FETCH_HEADER,
      );
      const jsonRes = await fetchRes.json();

      if (!fetchRes.ok && !jsonRes.success) {
        const error = createApiHelper(
          fetchRes.status,
          fetchRes?.statusText ? fetchRes.statusText : jsonRes?.status_message,
        );

        throw error;
      }

      const filteredRes = jsonRes?.results?.filter(
        (movie) => movie.genre_ids[0] != 18,
      );

      dispatch(addTopRatedMovies(filteredRes));
    } catch (error) {
      dispatch(addError({ status: error.name, message: error.message }));
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
