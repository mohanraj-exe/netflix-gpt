import { useDispatch } from "react-redux";
import { TMDB_BASE_URL, TMDB_FETCH_HEADER } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    const fetchRes = await fetch(
      TMDB_BASE_URL + movieId + "/videos",
      TMDB_FETCH_HEADER,
    );

    const jsonRes = await fetchRes?.json();
    // console.log(jsonRes);

    const { results } = jsonRes;

    const filterData = results?.filter((video) => video.type === "Trailer");
    // console.log(filterData);
    const movieTrailer = filterData?.length ? filterData[0] : results[0];

    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieTrailer;
