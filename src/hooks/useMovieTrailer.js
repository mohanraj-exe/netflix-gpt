import { useDispatch, useSelector } from "react-redux";
import { TMDB_BASE_URL, TMDB_FETCH_HEADER } from "../utils/constants";
import {
  addMovieTrailer,
  addWatchingMovieVideo,
  clearMovie,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie) => {
  // console.log(movie);

  const { id } = movie;

  const showTrailer = useSelector(
    (store) => store.movies?.browsePageShowTrailer,
  );

  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    // dispatch(clearMovie());

    const fetchRes = await fetch(
      TMDB_BASE_URL + id + "/videos",
      TMDB_FETCH_HEADER,
    );

    const jsonRes = await fetchRes?.json();
    // console.log(jsonRes);

    const { results } = jsonRes;
    console.log(results);

    const filterData = results?.filter((video) => video.type === "Trailer");
    // console.log("Trailer kind of videos found:", filterData);
    const movieTrailer = filterData?.length ? filterData[0] : results[0];
    // console.log("Kind of videos other than trailer:", movieTrailer);

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
