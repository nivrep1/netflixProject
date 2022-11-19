import React from "react";
import { HiSearch, HiBell } from "react-icons/hi";
import "../../styles/Header/search.scss";

const Search = () => {
  return (
    <div className="">
      <HiSearch className="text-white sm hidden h-6 w-6 sm:inline" />

      <HiBell className="text-white h-6 w-6" />
    </div>
  );
};

export default Search;
