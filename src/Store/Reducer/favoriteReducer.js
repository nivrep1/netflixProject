import { createSlice } from "@reduxjs/toolkit";
export const favoriteList = createSlice({
  name: "favoriteList",
  initialState: {
    list: [
      {
        id: 724495,
        title: "The Woman King",
        youtubeKey: "3RDaPV_rJ1Y",
        age_restriction: "16+",
        description:
          "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
        release_date: "2022-09-15",
        vote_average: 7.863,
        posterPath: "/lQMJHnHxUyj8kJlC2YOKNuzuwMP.jpg",
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
