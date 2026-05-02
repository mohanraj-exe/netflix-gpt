import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    movieTrailerVideo: null,
    popularMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
    watchingMovie: null,
    watchingMovieVideo: null,
    browsePageShowTrailer: true
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      // state.browsePageShowTrailer = true;
    },
    addMovieTrailer: (state, action) => {
      const { movieTrailer, movieTrailerVideo } = action.payload;
      state.movieTrailer = movieTrailer;
      state.movieTrailerVideo = movieTrailerVideo;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addWatchingMovie: (state, action) => {
      state.watchingMovie = action.payload;
      // state.browsePageShowTrailer = false;
    },
    addWatchingMovieVideo: (state, action) => {
      state.watchingMovieVideo = action.payload;
    },
    showBrowsePageTrailer: (state, action) => {
      state.browsePageShowTrailer = action.payload;
    },
    clearWatchingMovie: (state, action) => {
      state.watchingMovie = null;
      state.watchingMovieVideo = null;
    }
  },
});

export default movies.reducer;

export const {
  addnowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addWatchingMovie,
  addWatchingMovieVideo,
  showBrowsePageTrailer,
  clearWatchingMovie
} = movies.actions;
