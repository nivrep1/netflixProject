import { createSlice } from "@reduxjs/toolkit";
export const favoriteList = createSlice({
  name: "favoriteList",
  initialState: {
    list: [
      {
        id: 672,
        title: "Harry Potter and the Chamber of Secrets",
        youtubeKey: "1bq0qff4iF8",
        age_restriction: "16+",
        description:
          "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
        release_date: "2002-11-13",
        posterPath: "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
      },
    ],
  },

  reducers: {
    addMovie: (state, action) => {
      const isAdded =
        state.list.filter((movies) => movies.id == action.payload.id).length !=
        0;
      if (isAdded) {
        console.log("[ isExisting movie ]");
        return;
      }
      state.list.push(action.payload);
    },

    removeMovie: (state, action) => {
      state.list = state.list.filter((movies) => movies.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovie, removeMovie } = favoriteList.actions;

export default favoriteList.reducer;
