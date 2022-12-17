import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./SearchBox";
import "../../styles/Header/head.scss";
import { UserAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router";

const Head = (queryValue) => {
  const navigate = useNavigate();
  const handleFirstPage = async () => {
    try {
      await logOut();
      navigate("/firstPage");
    } catch (error) {
      console.log(error);
    }
  };
  const { user, logOut } = UserAuth();
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
    <div>
      {user?.email ? (
        <header className={`${IsScrolled && "bg-[#141414]"}`}>
          <div className="container">
            <div className="nav">
              <div className="lobar">
                <Logo onClick={refreshPage} />
                <Navbar />
              </div>
              <Search />
            </div>
          </div>
        </header>
      ) : (
        <header>
          <div className="container">
            <div className="nav">
              <div className="lobar">
                <Logo onClick={handleFirstPage} />
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Head;
