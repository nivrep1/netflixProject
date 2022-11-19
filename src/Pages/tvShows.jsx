import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const TvShows = () => {
  
  //Main page Random Image Generator
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  //  Taking films and series from api
  useEffect(() => {
    axios
      .get(requests.requestTvPopular, {
        params: {
          page: 2,
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
    <div className="w-full h-[100vh] text-white">
      <div className="w-full h-full ">
        {/* Gradient Background Image */}
        <div className="absolute w-full h-[100vh] bg-gradient-to-r from-black"></div>

        {/* Main Page Random Film Images */}
        <img
          className=" w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        {/*Movie Description && Buttons(Home page)  */}
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold w-[50%]">
            {movie?.title}
            {movie?.name}
          </h1>
          <div className="my-4"></div>
          <p className="text-gray-400 text-sm">
            Released:{movie?.release_date}
          </p>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {trunCateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
