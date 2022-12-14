import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue } from "../../Store/Reducer/searchReducer";
import { UserAuth } from "../../context/AuthContext";
// Icon
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// Axios & Requests
import axios from "axios";
import requests from "../../Requests";
//Style
import "../../styles/Header/search.scss";

const Search = () => {
  const { user, logOut } = UserAuth();

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

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // Search Activate
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    console.log("sa");
  };

  return (
    <div>
      {user?.email ? (
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
              <span>
                <a href="https://console.firebase.google.com/project/netflix-clone-94dcf/authentication/users">
                  Account
                </a>
              </span>
              <span onClick={handleLogOut}>Logout</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;

//text-white sm hidden h-6 w-6 sm:inline
