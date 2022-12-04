import React from "react";
import { useSelector } from "react-redux";
import "../../src/index.css";
import "../styles/Row.scss";
import "../styles/PageSearch.scss";

const SearchMovie = () => {
  const title = useSelector((state) => state.searchValue.title);
  const movies = useSelector((state) => state.searchValue.movies);

  return (
    <div className="main">
      <div className="search-page">
        <div className="container">
          <div className="slide">
            {movies.map((item) => (
              <img
                className="row_picture"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
            ))}
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
