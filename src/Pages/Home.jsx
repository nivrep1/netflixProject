import React from "react";
import Main from "../Components/Main";
import requests from "../Requests";
import Row from "../Components/Row";
import ContentPopup from "../Components/ContentPopup";

const Home = () => {
  return (
    <div>
      <Main />
      <ContentPopup />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row
        title="Netflix Originals"
        fetchURL={requests.requestNetflixOriginals}
      />
      <Row title="Tv Top Rated" fetchURL={requests.requestTvTopRated} />
      <Row title="Tv Popular" fetchURL={requests.requestTvPopular} />
      <Row title="Tv Airing Today" fetchURL={requests.requestTvAiringToday} />
      <Row title="Trend All Week" fetchURL={requests.requestTrendAllWeek} />
    </div>
  );
};

export default Home;
