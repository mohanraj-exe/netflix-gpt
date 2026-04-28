import { useDispatch } from "react-redux";
import { TMDB_BASE_URL, TMDB_FETCH_HEADER, TMDB_TOP_RATED_MOVIES_API } from "../utils/constants";
import { addT, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    
    const getTopRatedMovies = async () => {
        const fetchRes = await fetch(TMDB_BASE_URL + TMDB_TOP_RATED_MOVIES_API, TMDB_FETCH_HEADER);
        const jsonRes = await fetchRes.json();
        // console.log(jsonRes);
        
        dispatch(addTopRatedMovies(jsonRes.results));
    };
    
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;