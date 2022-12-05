import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header/navbar.scss";

const Navbar = () => {
  

  
  return (

<div className="nav">
      <ul>
        <li className="headerLink ">
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
