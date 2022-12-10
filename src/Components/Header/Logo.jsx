import React from "react";
import { Link } from "react-router-dom";


const logo = ({ onClick }) => {
  return (
    <div className="net" onClick={onClick}>
      <Link to="/">
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

export default logo;
