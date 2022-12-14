import { createSlice } from "@reduxjs/toolkit";

export const popupReducer = createSlice({
  name: "takeKey",
  initialState: {
    showPopup: false,
    content: {
      id: 0,
      title: "",
      youtubeKey: "",
      age_restriction: "",
      description: "",
      release_date: "",
      posterPath: "",
    },
  },

  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },

    showPopup: (state) => {
      state.showPopup = true;
    },

    hidePopup: (state) => {
      state.showPopup = false;
    },

    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContent, showPopup, hidePopup, setShowPopup } =
  popupReducer.actions;

export default popupReducer.reducer;
