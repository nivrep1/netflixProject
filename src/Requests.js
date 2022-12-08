// TMDB API KEYS && REQUESTS

const host = "https://api.themoviedb.org";

const requests = {
  requestPopular: `${host}/3/trending/all/week?&page=1&region=DE`,
  requestDiscover: `${host}/3/trending/all/week?&page=8&region=DE`,
  requestTrendAllWeek: `${host}/3/trending/all/week?&page=3&region=TR`,
  requestTvPopular: `${host}/3/tv/popular?&page=4&region=TR`,
  requestTvAiringToday: `${host}/3/tv/airing_today?&page=6&region=TR`,
  requestTvTopRated: `${host}/3/tv/top_rated?&page=1&region=TR`,
  requestNetflixOriginals: `${host}/3/discover/tv?&page=3&region=RU`,
  requestSearch: `${host}/3/search/multi`,
  requestMovieDetail: `${host}/3/`,
};

// requestPopular: `https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`,
export default requests;