export const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_TMDB_KEY}`;

export const moviesUpcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const moviesPopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const moviesNowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const moviesTopRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

export const tvAiringTodayUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const tvOnTheAirUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const tvTopRatedUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
