import { useDispatch } from "react-redux";
import {
  TMDB_FETCH_HEADER,
  TMDB_MOVIE_SEARCH,
  TMDB_QUERY_PARAMS,
} from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { addError } from "../utils/errorSlice";
import { useNavigate } from "react-router";
import createApiHelper from "../utils/createApiHelper";
import { addTMDBSearchResult } from "../utils/gptSlice";

const useGptMovieSearch = async (moviesName) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getGptSearchMovies = async (movie) => {
    try {
      const fetchRes = await fetch(
        TMDB_MOVIE_SEARCH + `?query=` + movie + TMDB_QUERY_PARAMS,
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
        (movie) => movie.genre_ids[0] != 18 && movie.backdrop_path !== null,
      );

      return filteredRes;
    } catch (error) {
      dispatch(addError({ status: error.name, message: error.message }));
    }
  };

  if (!moviesName) return;
  const promiseArray = moviesName?.map((movie) => getGptSearchMovies(movie));
  const tmdbResults = await Promise.all(promiseArray);
  dispatch(addTMDBSearchResult(tmdbResults));

  return;
};

export default useGptMovieSearch;
