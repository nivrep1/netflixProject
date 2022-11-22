import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "../../src/index.css";
import "../styles/Row.scss";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL, {
        params: {
          page: 1,
        },
      })
      .then((response) => {
        setMovies(
          response.data.results.filter((item) => item.backdrop_path != null)
        );
      });
  }, [fetchURL]);
  return (
    <>
      <div className="container">
        <h2 className=" md:text-xl p-2 pt-10  ">{title}</h2>
        <div className="slide">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,]}
            spaceBetween={5}
            slidesPerView={5}
            loop={false}
            navigation={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {movies.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className="row_picture"
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item?.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Row;
