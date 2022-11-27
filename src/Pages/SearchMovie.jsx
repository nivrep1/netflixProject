import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../src/index.css";
import "../styles/Row.scss";
import "../styles/PageSearch.scss";
const SearchMovie = () => {
  // const title = useSelector((state) => state.searchValue.title);
  const movies = useSelector((state) => state.searchValue.movies);

  console.log("==@@@=> ", movies);

  return (
    <div className="main">
    <div className="search-page">
    <div className="container">
        {/* <h2 className=" md:text-xl p-2 pt-10  ">Search Movie</h2> */}

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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default SearchMovie;
