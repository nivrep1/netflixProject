// TMDB API KEYS && REQUESTS

const host = "https://api.themoviedb.org";

const requests = {
  requestPopular: `${host}/3/trending/all/week?&page=2&region=US`,
  requestDiscover: `${host}/3/discover/movie?&page=2&region=TR`,
  requestTrendAllWeek: `${host}/3/trending/all/week?&page=4&region=TR`,
  requestUpComing: `${host}/3/movie/upcoming?&page=8`,
  requestTvPopular: `${host}/3/tv/popular?&page=9&region=TR`,
  requestTvAiringToday: `${host}/3/tv/airing_today?&page=3&region=TR`,
  requestTvTopRated: `${host}/3/tv/top_rated?&page=12&region=TR`,
  requestNetflixOriginals: `${host}/3/discover/tv?&page=15&region=TR`,
  requestSearch: `${host}/3/search/multi`,
  requestMovieDetail: `${host}/3/`,
};

// requestPopular: `https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`,
export default requests;
