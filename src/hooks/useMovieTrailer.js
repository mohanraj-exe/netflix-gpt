import { useDispatch, useSelector } from "react-redux";
import { TMDB_BASE_URL, TMDB_FETCH_HEADER } from "../utils/constants";
import {
  addMovieTrailer,
  addWatchingMovieVideo,
  clearMovie,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie) => {
  const { id } = movie;

  const showTrailer = useSelector(
    (store) => store.movies?.browsePageShowTrailer,
  );

  const dispatch = useDispatch();

  const getMovieDetails = async () => {

    const fetchRes = await fetch(
      TMDB_BASE_URL + id + "/videos",
      TMDB_FETCH_HEADER,
    );

    const jsonRes = await fetchRes?.json();

    const { results } = jsonRes;

    const filterData = results?.filter((video) => video.type === "Trailer");

    const movieTrailer = filterData?.length ? filterData[0] : results[0];

    if (showTrailer) {
      dispatch(
        addMovieTrailer({
          movieTrailer: movie,
          movieTrailerVideo: movieTrailer,
        }),
      );
    } else dispatch(addWatchingMovieVideo(movieTrailer));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieTrailer;
