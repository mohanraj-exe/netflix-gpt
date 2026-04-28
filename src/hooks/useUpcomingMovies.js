import { useDispatch } from "react-redux";
import {
  TMDB_BASE_URL,
  TMDB_FETCH_HEADER,
  TMDB_UPCOMING_MOVIES_API,
} from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const fetchRes = await fetch(
      TMDB_BASE_URL + TMDB_UPCOMING_MOVIES_API,
      TMDB_FETCH_HEADER,
    );
    
    const jsonRes = await fetchRes.json();
    // console.log(jsonRes);

    dispatch(addUpcomingMovies(jsonRes.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
