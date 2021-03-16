import {
  SET_TV_VIEW,
  SET_MOVIES_VIEW,
  GET_HOME_DATA_SUCCESS,
  SET_CONFIG,
} from '../actions';

const home_reducer = (state, action) => {
  if (action.type === GET_HOME_DATA_SUCCESS) {
    const [
      moviesUpcoming,
      moviesPopular,
      moviesNowPlaying,
      moviesTopRated,
      tvAiringToday,
      tvPopular,
      tvPlaying,
      tvTopRated,
    ] = action.payload;
    return {
      ...state,
      movies: {
        upcoming: moviesUpcoming,
        popular: moviesPopular,
        now_playing: moviesNowPlaying,
        top_rated: moviesTopRated,
      },
      tv: {
        airing_today: tvAiringToday,
        popular: tvPopular,
        on_the_air: tvPlaying,
        top_rated: tvTopRated,
      },
    };
  }
  if (action.type === SET_MOVIES_VIEW) {
    return { ...state, movies_view: true };
  }
  if (action.type === SET_TV_VIEW) {
    return { ...state, movies_view: false };
  }
  if (action.type === SET_CONFIG) {
    return { ...state, config: action.payload };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default home_reducer;
