import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../src/index.css";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  return (
    <>
      <div className="container">
        <h2 className="text-white font-bold md:text-xl p-2  ">{title}</h2>
        <div className="relative flex  items-center w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            navigation={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {movies.map((item, id) => (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
                <SwiperSlide>
                  <img
                    className="rounded w-full h-auto block"
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt={item?.title}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Row;
