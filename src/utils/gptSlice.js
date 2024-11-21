import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSeachView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovies, gptMovieNames } = action.payload;
      state.gptMovies = gptMovies;
      state.gptMovieNames = gptMovieNames;
    },
  },
});

export const { toggleGptSeachView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
