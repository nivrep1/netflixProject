import React from "react";
import { HiSearch, HiBell } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex items-center space-x-4 text-sm font-light">
    
      <HiSearch className="text-white sm hidden h-6 w-6 sm:inline" />
      
      <HiBell className="text-white h-6 w-6" />
    </div>
  );
};

export default Search;
