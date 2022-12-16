import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss"
const LogoLogin = () => {
  return (
    <div className="loginLogo">
    <Link to="/firstPage">
    <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix"
          width={110}
          height={100}
        />
    </Link>
        
    </div>
  );
};

export default LogoLogin;