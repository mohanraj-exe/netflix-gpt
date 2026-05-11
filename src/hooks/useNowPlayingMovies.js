import { useDispatch } from "react-redux";
import {
  TMDB_BASE_URL,
  TMDB_FETCH_HEADER,
  TMDB_NOW_PLAYING_API,
} from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { addError } from "../utils/errorSlice";
import { useNavigate } from "react-router";
import createApiHelper from "../utils/createApiHelper";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNowPlayingMovies = async () => {
    try {
      const fetchRes = await fetch(
        TMDB_BASE_URL + TMDB_NOW_PLAYING_API,
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

      dispatch(addnowPlayingMovies(filteredRes));
    } catch (error) {
      dispatch(addError({ status: error.name, message: error.message }));
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
