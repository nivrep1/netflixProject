import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="ml-8">
      <ul className="hidden space-x-6 md:flex">
        <li className="headerLink cursor-default text-white hover:text-white ">
          <Link to="/">Home</Link>
        </li>
        <li className="headerLink">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="headerLink">
          <Link to="/tvShows">Tv Shows</Link>
        </li>
        <li className="headerLink">
          <Link to="/newPopular">New & Popular</Link>
        </li>
        <li className="headerLink">
          <Link to="/myList">My List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
