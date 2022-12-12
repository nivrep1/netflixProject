import React, { useEffect, useState } from "react";
import ContentPopup from "../Components/ContentPopup";
import axios from "axios";
import Row from "../Components/Row";
//Api data requests
import requests from "../Requests";
import "../styles/Main.scss";
import Footer from "../Components/Footer/Footer";

const NewPopular = () => {
  //Main page Random Image Generator
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  //  Taking films and series from api
  useEffect(() => {
    axios
      .get(requests.requestDiscover, {
        params: {
          page: 3,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        response.data.results.filter((item) => item.backdrop_path != null);
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
    <>
      <div className="main">
        <div className="w-full h-full ">
          {/* Gradient Background Image */}
          <div className="background   bg-gradient-to-r from-black"></div>

          {/* Main Page Random Film Images */}
          <img
            className=" main-picture"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />

          {/*Movie Description && Buttons(Home page)  */}
          <div className="description  md:p-8">
            <h1 className="text-3xl w-6/12 md:text-5xl font-bold">
              {movie?.name}
              {movie?.title}
            </h1>
            <div className="my-4"></div>
            <p className="text-gray-400 text-sm">
              Released:{movie?.release_date}
            </p>

            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-xl">
              {trunCateString(movie?.overview, 200)}
            </p>
          </div>
        </div>
      </div>

      <ContentPopup />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row
        title="Netflix Originals"
        fetchURL={requests.requestNetflixOriginals}
      />
      <Row title="Tv Popular" fetchURL={requests.requestTvPopular} />
      <Row title="Trend All Week" fetchURL={requests.requestTrendAllWeek} />
      <Footer />
    </>
  );
};

export default NewPopular;
