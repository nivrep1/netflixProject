import axios from "axios";
import React, { useEffect, useState } from "react";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper";
//Style
import "../../src/index.css";
import "../styles/Row.scss";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import requests from "../Requests";

import { useDispatch } from "react-redux";
import { setContent, showPopup } from "../Store/Reducer/popupReducer";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const TRAILER = "Trailer";

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

  useEffect(() => {
    axios
      .get(fetchURL, {
        params: {
          pages: 1,
          include_adult: false,
        },
      })
      .then((response) => {
        setMovies(
          response.data.results.filter((item) => item.poster_path != null)
        );
      });
  }, [fetchURL]);

  return (
    <>
      <div className="container">
        <h2 className="p-2 pt-10  ">{title}</h2>
        <div className="slide">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[Navigation, Pagination, Scrollbar, FreeMode]}
            slidesPerView={5}
            loop={true}
            navigation={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              360: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {movies.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="img-box ">
                  <img
                    onClick={(click) => {
                      selectObject(item.id, item.media_type);
                    }}
                    className="row_picture   rounded"
                    src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                    alt={item?.title}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Row;
