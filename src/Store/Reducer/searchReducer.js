import { createSlice } from "@reduxjs/toolkit";

export const searchReducer = createSlice({
  name: "searchField",
  initialState: {
    title: "",
    movies: [],
  },
  reducers: {
    changeSearchValue: (state, action) => {
      state.title = action.payload.title;
      state.movies = action.payload.movies;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSearchValue } = searchReducer.actions;

export default searchReducer.reducer;
