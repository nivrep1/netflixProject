import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./SearchBox";
import "../../styles/Header/head.scss";
import { UserAuth } from "../../context/AuthContext";



const Head = (queryValue) => {

  const {user,logOut} = UserAuth()
  console.log(user);

  
  const [IsScrolled, setIsScrolled] = useState(false);

  const refreshPage = () => {
    window.location.reload(false);
  };

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
    <header className={`${IsScrolled && "bg-[#141414]"}`}>
      <div className="container">
      {user?.email ? <div className="nav">
          <div className="lobar">
            <Logo onClick={refreshPage} />
            <Navbar />
          </div>
          <Search /> 

          
        </div> : null}
        
      </div>
    </header>
  );
};

export default Head;
