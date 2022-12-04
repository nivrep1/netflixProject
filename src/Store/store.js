import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Reducer/searchReducer";
import popupReducer from "./Reducer/popupReducer";

export default configureStore({
  reducer: {
    searchValue: searchReducer,
    popupValue: popupReducer,
  },
});
