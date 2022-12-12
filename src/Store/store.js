import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Reducer/searchReducer";
import popupReducer from "./Reducer/popupReducer";
import favoriteList from "./Reducer/favoriteReducer"

export default configureStore({
  reducer: {
    searchValue: searchReducer,
    popupValue: popupReducer,
    favoriteValue: favoriteList,
  },
});
