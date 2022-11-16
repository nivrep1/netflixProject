import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

const Head = () => {
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
    <header
      className={`${
        IsScrolled && "bg-[#141414] fixed inset-x-0 top-0 left-0 z-[100] h-20"
      }`}
    >
      <div className="flex item-center justify-between p-6 w-full absolute z-[100]">
        <Logo />
        <Navbar />
        <div>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Head;
