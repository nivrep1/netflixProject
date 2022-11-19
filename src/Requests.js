// TMDB API KEYS && REQUESTS

const ApiKey = "5873e06f4a42d7c901d515b672defd63";
const host = "https://api.themoviedb.org";

const requests = {
  requestPopular: `${host}/3/trending/all/week?`,
  requestDiscover: `${host}/3/discover/movie?`,
  requestTrendAllWeek: `${host}/3/trending/all/week?`,
  requestUpComing: `${host}/3/movie/upcoming?`,
  requestTvPopular: `${host}/3/tv/popular?`,
  requestTvAiringToday: `${host}/3/tv/airing_today?`,
  requestTvTopRated: `${host}/3/tv/top_rated?`,
  requestNetflixOriginals: `${host}/3/discover/tv?`,
  requestSearch: `${host}/3/search/movie?`,
};

// requestPopular: `https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`,
export default requests;
  