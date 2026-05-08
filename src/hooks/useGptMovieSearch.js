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
  // const moviesName = useSelector((store) => store.gpt?.moviesName);
  console.log(moviesName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getGptSearchMovies = async (movie) => {
    try {
      console.log(movie);

      const fetchRes = await fetch(
        TMDB_MOVIE_SEARCH + `?query=` + movie + TMDB_QUERY_PARAMS,
        TMDB_FETCH_HEADER,
      );

      const jsonRes = await fetchRes.json();
      console.log(jsonRes);

      // if (!fetchRes.ok && !jsonRes.success) {
      //   const error = createApiHelper(
      //     fetchRes.status,
      //     fetchRes?.statusText ? fetchRes.statusText : jsonRes?.status_message,
      //   );

      //   throw error;
      // }

      // const filteredRes = jsonRes?.results?.filter(
      //   (movie) => movie.genre_ids[0] != 18,
      // );

      // dispatch(addnowPlayingMovies(filteredRes));
      return jsonRes.results;
    } catch (error) {
      console.log(error);
      // dispatch(addError({ status: error.name, message: error.message }));
    }
  };

  // useEffect(() => {
  if (!moviesName) return;
  // const gptSearch = async () => {
  const promiseArray = moviesName?.map((movie) => getGptSearchMovies(movie));
  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);
  dispatch(addTMDBSearchResult(tmdbResults));
  // };

  //   return () => gptSearch();
  // }, []);

  return;
};

export default useGptMovieSearch;
