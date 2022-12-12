import { createSlice } from "@reduxjs/toolkit";

export const favoriteList = createSlice({
  name: "favoriteList",
  initialState: {
    list: [],
  },

  reducers: {
    addMovie: (state, action) => {
      const isAdded = state.list.filter(((movies) => movies.title == action.payload.title)).length != 0;
      if (isAdded) {
        console.log("[ isExisting movie ]")
        return;
      }
      state.list.push(action.payload);
    },

    removeMovie: (state, action) => {
      state.list = state.list.filter((movies) => movies.title != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovie, removeMovie } = favoriteList.actions;

export default favoriteList.reducer;
