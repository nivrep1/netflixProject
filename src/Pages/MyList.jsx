import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContentPopup from "../Components/ContentPopup";

import axios from "axios";

import requests from "../Requests";
import { useDispatch } from "react-redux";
import { setContent, showPopup } from "../Store/Reducer/popupReducer";
const MyList = () => {
  const favoriteValue = useSelector((state) => state.favoriteValue.list);
  const title = useSelector((state) => state.searchValue.title);
  const movies = useSelector((state) => state.searchValue.movies);
  const TRAILER = "Trailer";
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
          append_to_response: "videos",
        },
      })
      .then((response) => {
        const result = response.data;
        let youtubeKey = "";

        if (result.videos.results.length != 0) {
          const videos = result.videos.results.filter(
            (video) => video.type === TRAILER
          );
          youtubeKey =
            videos.length == 0 ? result.videos.result[0].key : videos[0].key;
        }

        const reduxSaveData = {
          id: result.id,
          title: result.title == null ? result.name : result.title,
          youtubeKey: youtubeKey,
          age_restriction: "16+",
          description: result.overview,
          release_date: result.release_date,
          vote_average: result.vote_average,
          posterPath: result.poster_path,
        };

        dispatch(setContent(reduxSaveData));
        dispatch(showPopup());
      });
  };

  return (
    <>
      <ContentPopup />
      <div className="main">
        <div className="search-page">
          <div className="container">
            <div className="slide">
              {favoriteValue.map((item) => (
                <div className="img-box " key={item.id}>
                  <img
                    onClick={(click) => {
                      console.log("===content= >", item);
                      console.log("===content= >", item.media_type);

                      selectObject(item.id, item.media_type);
                    }}
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
