import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import Row from "../Components/Row";
import ContentPopup from "../Components/ContentPopup";
import Footer from "../Components/Footer/Footer";
import "../styles/Main.scss";

const Movies = () => {
  //Main page Random Image Generator
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  //  Taking films and series from api
  useEffect(() => {
    axios
      .get(requests.requestTrendAllWeek, {
        params: {
          page: 17,
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
        {/* Gradient Background Image */}
        <div className="background"></div>

        {/* Main Page Random Film Images */}
        <img
          className="main-picture"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        {/*Movie Description && Buttons(Home page)  */}
        <div className="description">
          <h2>
            {movie?.title}
            {movie?.name}
          </h2>
          <div className="my-4"></div>

          <p className="w-full  lg:max-w-[50%]  md:max-w-[50%] text-gray-200 text-xl">
            {trunCateString(movie?.overview, 150)}
          </p>
        </div>
      </div>

      <ContentPopup />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row
        title="Netflix Originals"
        fetchURL={requests.requestNetflixOriginals}
      />
      <Row title="Trend All Week" fetchURL={requests.requestTrendAllWeek} />
      <Footer/>
    </>
  );
};

export default Movies;
