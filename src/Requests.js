// TMDB API KEYS && REQUESTS

const api_key = "5873e06f4a42d7c901d515b672defd63";
const host = "https://api.themoviedb.org";

const requests = {
  requestPopular: `${host}/3/movie/popular`,
  requestTrendAllWeek: `${host}/3/trending/all/week`,
  requestUpcoming: `${host}/3/movie/upcoming`,
  requestTvPopular: `${host}/3/tv/popular`,
  requestTvAiringToday: `${host}/3/tv/airing_today`,
  requestTvTopRated: `${host}/3/tv/top_rated`,
  requestNetflixOriginals: `${host}/3/discover/tv`,
  requestSearch: `${host}/3/search/movie`,
};

export default requests;
