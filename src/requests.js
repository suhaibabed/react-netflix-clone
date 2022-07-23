const Key_API = "dbbd96e9299881fb25be1d1699039f03";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Key_API}&language=en-US`,

  fetchNetflixOriginals: `/discover/tv?api_key=${Key_API}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Key_API}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Key_API}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Key_API}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Key_API}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Key_API}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Key_API}&with_genres=99`,
};
export default requests;
