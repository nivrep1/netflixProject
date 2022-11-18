// TMDB API KEYS && REQUESTS

const ApiKey = "5873e06f4a42d7c901d515b672defd63";
const host = "https://api.themoviedb.org";

const requests = {
  requestPopular: `${host}/3/trending/all/week?api_key=${ApiKey}`,
  requestDiscover: `${host}/3/discover/movie?api_key=${ApiKey}`,
  requestTrendAllWeek: `${host}/3/trending/all/week?api_key=${ApiKey}`,
  requestUpComing: `${host}/3/movie/upcoming?api_key=${ApiKey}`,
  requestTvPopular: `${host}/3/tv/popular?api_key=${ApiKey}`,
  requestTvAiringToday: `${host}/3/tv/airing_today?api_key=${ApiKey}`,
  requestTvTopRated: `${host}/3/tv/top_rated?api_key=${ApiKey}`,
  requestNetflixOriginals: `${host}/3/discover/tv?api_key=${ApiKey}`,
  requestSearch: `${host}/3/search/movie?api_key=${ApiKey}`,
};

// requestPopular: `https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`,
export default requests;
  