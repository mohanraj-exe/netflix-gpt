import { useDispatch } from "react-redux";
import { TMDB_BASE_URL, TMDB_FETCH_HEADER, TMDB_NOW_PLAYING_API } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    
    const getNowPlayingMovies = async () => {
        const fetchRes = await fetch(TMDB_BASE_URL + TMDB_NOW_PLAYING_API, TMDB_FETCH_HEADER);
        const jsonRes = await fetchRes.json();
        // console.log(jsonRes);
        
        dispatch(addnowPlayingMovies(jsonRes.results));
    };
    
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;