import React from "react";
import { Link } from "react-router-dom";

const logo = ({onClick}) => {
  return (
    <div onClick={onClick}>
      <Link to="/">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix"
          width={100}
          height={25}
          className="cursor-pointer object-contain text-4xl mx-4"
        />
      </Link>
    </div>
  );
};

export default logo;
