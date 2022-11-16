// TMDB API KEYS && REQUESTS

const apiKey = "5873e06f4a42d7c901d515b672defd63";
const host = "https://api.themoviedb.org"

const requests = {
  requestPopular: `${host}/3/movie/popular`,
  requestTopRated: `${host}/3/movie/top_rated?${apiKey}&language=en-US&page=1`,
  requestTrending: `${host}/3/movie/popular?${apiKey}&language=en-US&page=2`,
  requestHorror: `${host}/3/search/movie?${apiKey}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `${host}/3/movie/upcoming?${apiKey}&language=en-US&page=1`,

  request2: `${host}/3/movie/popular?api_key=5873e06f4a42d7c901d515b672defd63&language=en-US&page=1`
};

export default requests;

