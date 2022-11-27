import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../src/index.css";
import "../styles/Row.scss";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL, {
        params: {
          page: 1,
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
            modules={[Navigation, Pagination, Scrollbar, A11y]}
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
