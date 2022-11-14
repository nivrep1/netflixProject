import React, { useState, useEffect } from "react";
import { HiSearch, HiBell } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  // const [scroll,setScroll] = useState(false)

  // useEffect(()=>{
  //   const Scrolled = ()=>{
  //     if(window.scrollY>0){
  //       setScroll(true)
  //     }
  //     else{
  //       setScroll(false)
  //     }
  //   }

  // },[])

  return (
    // Netflix Logo

    <div className="flex item-center justify-between  p-6 z-[100] w-full absolute">
      <div className="flex gap-x-10 ">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            width={93}
            height={25}
            className="cursor-pointer object-contain text-4xl mx-4"
          />
        </Link>
        {/* <BasicMenu /> */}

        <ul className="hidden space-x-6 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white ">
            <Link to="/">Home</Link>
          </li>
          <li className="headerLink">
            <Link to="/tvShows">Tv Shows</Link>
          </li>
          <li className="headerLink">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="headerLink">
            <Link to="/newPopular">New & Popular</Link>
          </li>
          <li className="headerLink">
            <Link to="/myList">My List</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <HiSearch className="text-white sm hidden h-6 w-6 sm:inline" />
        <HiBell className="text-white h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
