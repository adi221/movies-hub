export const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_TMDB_KEY}`;

// Home Page
export const moviesUpcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const moviesPopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const moviesNowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const moviesTopRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

export const tvAiringTodayUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const tvOnTheAirUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const tvTopRatedUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

// Single Item
// Movies:
export const singleMovieForeword = 'https://api.themoviedb.org/3/movie/';
export const singleMovieDetails = `?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singleMovieCredits = `/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singleMovieTrailers = `/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singleMovieReviews = `/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
// Tv:
export const singleTvForeword = 'https://api.themoviedb.org/3/tv/';
export const singleTvDetails = `?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singleTvCredits = `/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singleTvTrailers = `/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singleTvReviews = `/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
// People:
export const singlePersonForeword = 'https://api.themoviedb.org/3/person/';
export const singlePersonDetails = `?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const singlePersonCombinedCredits = `/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;

// Search results
export const searchResultsForeword = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
// &query=${query}&page=${page}&include_adult=false

// Discover
export const discoverForeword = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const discoverMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
export const discoverTvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
// &sort_by=${sort}&include_adult=false&include_video=false&page=${page}
