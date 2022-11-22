import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../styles/Header/search.scss";

const Search = () => {
  return (
    <div className="right">
      <SearchIcon className="icon" />
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
