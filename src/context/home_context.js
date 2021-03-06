import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/home_reducer';
import {
  configUrl,
  moviesUpcomingUrl,
  moviesPopularUrl,
  moviesNowPlayingUrl,
  moviesTopRatedUrl,
  tvAiringTodayUrl,
  tvPopularUrl,
  tvOnTheAirUrl,
  tvTopRatedUrl,
} from '../utils/constants';
import {
  SET_TV_VIEW,
  SET_MOVIES_VIEW,
  GET_HOME_DATA_SUCCESS,
  SET_CONFIG,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} from '../actions';

import { getJSON } from '../utils/helpers';

const initialState = {
  config: {},
  movies: {
    upcoming: [],
    popular: [],
    now_playing: [],
    top_rated: [],
  },
  tv: {
    airing_today: [],
    popular: [],
    on_the_air: [],
    top_rated: [],
  },
  movies_view: true,
  loading: true,
};

const HomeContext = React.createContext();

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    setLoadingTrue();
    try {
      const data = await Promise.all([
        getJSON(moviesUpcomingUrl),
        getJSON(moviesPopularUrl),
        getJSON(moviesNowPlayingUrl),
        getJSON(moviesTopRatedUrl),
        getJSON(tvAiringTodayUrl),
        getJSON(tvPopularUrl),
        getJSON(tvOnTheAirUrl),
        getJSON(tvTopRatedUrl),
      ]);
      dispatch({ type: GET_HOME_DATA_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
    setLoadingFalse();
  };

  const fetchConfig = async () => {
    setLoadingTrue();
    try {
      fetch(configUrl)
        .then(res => res.json())
        .then(data => dispatch({ type: SET_CONFIG, payload: data.images }));
    } catch (error) {
      console.log(error);
    }
    setLoadingFalse();
  };

  const setMoviesView = () => {
    dispatch({ type: SET_MOVIES_VIEW });
  };

  const setTvView = () => {
    dispatch({ type: SET_TV_VIEW });
  };

  function setLoadingTrue() {
    dispatch({ type: SET_LOADING_TRUE });
  }

  function setLoadingFalse() {
    dispatch({ type: SET_LOADING_FALSE });
  }

  useEffect(() => {
    fetchData();
    fetchConfig();
  }, []);

  return (
    <HomeContext.Provider value={{ ...state, setMoviesView, setTvView }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};

export default HomeProvider;
