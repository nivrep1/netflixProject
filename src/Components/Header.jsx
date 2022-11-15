import React, { useState, useEffect } from "react";
import { HiSearch, HiBell } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  //Header Fixed
  const [IsScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Netflix Logo
    <header
      className={`${
        IsScrolled &&
        "bg-[#141414] fixed inset-x-0 top-0 left-0 z-[100] h-16 bg-gradient-to-b from-gray-900/10 to-[#010511]"
      }`}
    >
      <div className="flex item-center justify-between  p-6  w-full absolute z-[100]">
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
    </header>
  );
};

export default Header;
