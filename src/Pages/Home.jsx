import React from "react";
import Main from "../Components/Main";
import requests from "../Requests";
import Row from "../Components/Row";
const Home = () => {
  return (
    <div>
      <Main />
      <Row
        title="Netflix Originals"
        fetchURL={requests.requestNetflixOriginals}
      />
      <Row title="Tv Top Rated" fetchURL={requests.requestTvTopRated} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trend All Week" fetchURL={requests.requestTrendAllWeek} />
      <Row title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row title="Tv Popular" fetchURL={requests.requestTvPopular} />
      <Row title="Tv Airing Today" fetchURL={requests.requestTvAiringToday} />
    </div>
  );
};

export default Home;
