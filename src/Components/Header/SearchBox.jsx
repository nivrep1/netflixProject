import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../styles/Header/search.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue } from "../../Store/Reducer/searchReducer";

import axios from "axios";
import requests from "../../Requests";

const Search = () => {
  const navigate = useNavigate();
  const searchValue = useSelector((state) => state.searchValue.value);
  const dispatch = useDispatch();

  console.log("===> ", searchValue);

  const searchMulti = (value) => {
    axios
      .get(requests.requestSearch, {
        params: {
          query: value,
          include_adult: false,
        },
      })
      .then((response) => {
        const data = {
          title: value,
          movies: response.data.results.filter(
            (item) => item.backdrop_path != null
          ),
        };
        dispatch(changeSearchValue(data));
      });
  };

  return (
    <div className="right">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          const value = String(e.target.value);

          navigate(value.length > 0 ? "/search" : "/");

          if (value.length > 1) {
            searchMulti(value);
          }
        
        }}
      />

      <button>
        <SearchIcon className="icon" />
      </button>
      <NotificationsActiveIcon className="icon" />
      <div className="profile">
        <ArrowDropDownIcon className="icon" />
        <div className="options ">
          <span>Settings</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

//text-white sm hidden h-6 w-6 sm:inline
