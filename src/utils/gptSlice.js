import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesName: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.moviesName = action.payload;
    },
    addTMDBSearchResult: (state, action) => {
      state.movieResults = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, addTMDBSearchResult } = gptSlice.actions;

export default gptSlice.reducer;
