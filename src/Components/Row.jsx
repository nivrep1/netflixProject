import axios from "axios";
import React, { useEffect, useState } from "react";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
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

  useEffect(() => {
    axios
      .get(fetchURL, {
        params: {
          page: 3,
          include_adult: false,
        },
      })
      .then((response) => {
        setMovies(
          response.data.results.filter((item) => item.poster_path != null)
        );
        console.log(response.data);
      });
  }, [fetchURL]);

  return (
    <>
      <div className="container">
        <h2 className=" md:text-xl p-2 pt-10  ">{title}</h2>
        <div className="slide">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            navigation={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {movies.map((item) => (
              <SwiperSlide key={item.id}>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <img
                  onClick={(click) => {
                    console.log("===content= >", item);
                    console.log("===content= >", item.media_type);

                    selectObject(item.id, item.media_type);
                  }}
                  className="row_picture   rounded"
                  src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                  alt={item?.title}
                />
                <h1>{item.logo_path}</h1>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Row;
