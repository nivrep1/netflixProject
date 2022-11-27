import React, { useEffect, useState } from "react";
import axios from "axios";
// Style
import "../styles/Main.scss";
//Api data requests
import requests from "../Requests";

const Home = () => {
  //Main page Random Image Generator
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  //  Taking films and series from api
  useEffect(() => {
    axios
      .get(requests.requestPopular, {
        params: {
          page: 5,
          include_adult: false,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  // TrunCate Text
  const trunCateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="main">
      {/* Gradient Background Image */}
      <div className="background   bg-gradient-to-r from-black"></div>

      {/* Main Page Random Film Images */}
      <img
        className
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      {/*Movie Description && Buttons(Home page)  */}
      <div className="description  md:p-8">
        {/* <img
          src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
          alt="vndhv"
        /> */}
        <h2 className="text-3xl w-6/12 md:text-5xl font-bold">
          {movie?.title}
          {movie?.name}
        </h2>
        <div className="my-4"></div>

        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {trunCateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Home;
