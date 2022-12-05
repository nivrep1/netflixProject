import React, { useState } from "react";
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
          certification_country: true,
        },
      })
      .then((response) => {
        const data = {
          title: value,
          movies: response.data.results.filter(
            (item) => item.poster_path != null
          ),
        };
        dispatch(changeSearchValue(data));
      });
  };
  // Search Activate
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    console.log("sa");
  };

  return (
    <div className="right">
      <div className="search">
        <input
          type="search"
          placeholder="Titles, people, genres"
          className={isActive ? "toggle" : "input"}
          onChange={(e) => {
            const value = String(e.target.value);

            navigate(value.length > 0 ? "/search" : "/");

            if (value.length > 1) {
              searchMulti(value);
            }
          }}
        />
        <SearchIcon onClick={handleToggle} className="icon" />
        
      </div>

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
