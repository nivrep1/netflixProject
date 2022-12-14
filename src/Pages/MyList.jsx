import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer"
import { useSelector } from "react-redux";

const MyList = () => {
  const favoriteValue = useSelector((state) => state.favoriteValue.list);
  return (
    <>
    
      <div className="main">
        <div className="search-page">
          <div className="container">
            <div className="slide">
              {favoriteValue.map((item) => (
                <div className="img-box">
                  <img

                    className="row_picture"
                    src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
                    alt={item?.title}
                  />
                </div>
              ))}
            </div>
            <h3>title</h3>
          </div>
        </div>
      </div>
    </>
  );
};


export default MyList;
