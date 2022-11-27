import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Reducer/searchReducer";

export default configureStore({
  reducer: {
    searchValue: searchReducer
  },
});
