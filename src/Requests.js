// TMDB API KEYS && REQUESTS

const host = "https://api.themoviedb.org";

const requests = {
  requestPopular: `${host}/3/trending/all/week?&page=1`,
  requestDiscover: `${host}/3/discover/movie?&page=2`,
  requestTrendAllWeek: `${host}/3/trending/all/week?&page=4`,
  requestUpComing: `${host}/3/movie/upcoming?&page=8`,
  requestTvPopular: `${host}/3/tv/popular?&page=9`,
  requestTvAiringToday: `${host}/3/tv/airing_today?&page=10`,
  requestTvTopRated: `${host}/3/tv/top_rated?&page=12`,
  requestNetflixOriginals: `${host}/3/discover/tv?&page=15`,
  requestSearch: `${host}/3/search/movie?&page=19`,
};

// requestPopular: `https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`,
export default requests;
