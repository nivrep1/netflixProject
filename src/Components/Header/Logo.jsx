import React from "react";
import { Link } from "react-router-dom";

const logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
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
