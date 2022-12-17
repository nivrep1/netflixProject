import { useSelector } from "react-redux";
import "../../src/index.css";
import "../styles/Row.scss";
import "../styles/PageSearch.scss";
import axios from "axios";
import React from "react";
import requests from "../Requests";
import { useDispatch } from "react-redux";
import { setContent, showPopup } from "../Store/Reducer/popupReducer";
import ContentPopup from "../Components/ContentPopup";

const SearchMovie = () => {
  const title = useSelector((state) => state.searchValue.title);
  const movies = useSelector((state) => state.searchValue.movies);

  const dispatch = useDispatch();

  const selectObject = (value, type) => {
    var contentType = "tv/";

    if (type == "movie") {
      contentType = "movie/";
    }

    const URL = requests.requestMovieDetail + contentType + value;
    axios
      .get(URL, {
        params: {
          pages: 2,
          append_to_response: "videos",
        },
      })
      .then((response) => {
        const result = response.data;

        const reduxSaveData = {
          title: result.title == null ? result.name : result.title,
          youtubeKey:
            result.videos.results.length != 0
              ? result.videos.results[0].key
              : "",
          age_restriction: "18+",
          description: result.overview,
        };

        dispatch(setContent(reduxSaveData));
        dispatch(showPopup());
      });
  };

  return (
    <>
      <ContentPopup />
      <div className="main sm:mt-5rem">
        <div className="search-page">
          <div className="container">
            <div className="slide">
              {movies.map((item) => (
                <div className="img-box">
                  <img
                    onClick={(click) => {
                      console.log("===content= >", item);
                      console.log("===content= >", item.media_type);

                      selectObject(item.id, item.media_type);
                    }}
                    className="row_picture"
                    src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                    alt={item?.title}
                  />
                </div>
              ))}
            </div>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMovie;
