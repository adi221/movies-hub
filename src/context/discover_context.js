import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/discover_reducer';
import { discoverTvUrl, discoverMovieUrl } from '../utils/constants';
import { getJSONSingleItem } from '../utils/helpers';
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_EXPLORE_DATA,
  SET_DISCOVER_MOVIES,
  SET_DISCOVER_TV,
  PREV_PAGE,
  NEXT_PAGE,
  UPDATE_SORT,
  SET_PAGE_1,
} from '../actions';

const DiscoverContext = React.createContext();

const initialState = {
  discover_movie: true,
  loading: false,
  data: [],
  page: 1,
  total_pages: null,
  sort: 'popularity.desc',
};

const DiscoverProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fullDiscoverMovieUrl = `${discoverMovieUrl}&sort_by=${state.sort}&include&include_adult=false&include_video=false&page=${state.page}`;
  const fullDiscoverTvUrl = `${discoverTvUrl}&sort_by=${state.sort}&include&include_adult=false&include_video=false&page=${state.page}`;

  const currentUrl = state.discover_movie
    ? fullDiscoverMovieUrl
    : fullDiscoverTvUrl;

  const fetchData = async () => {
    setLoadingTrue();
    try {
      const data = await getJSONSingleItem(currentUrl);
      console.log(data);
      dispatch({ type: SET_EXPLORE_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
    setLoadingFalse();
  };

  const updateSort = name => {
    setPageTo1();
    dispatch({ type: UPDATE_SORT, payload: name });
  };

  const setDiscoverTv = () => {
    setPageTo1();
    dispatch({ type: SET_DISCOVER_TV });
  };

  const setDiscoverMovies = () => {
    setPageTo1();
    dispatch({ type: SET_DISCOVER_MOVIES });
  };

  const nextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };

  const prevPage = () => {
    dispatch({ type: PREV_PAGE });
  };

  function setPageTo1() {
    dispatch({ type: SET_PAGE_1 });
  }

  function setLoadingTrue() {
    dispatch({ type: SET_LOADING_TRUE });
  }

  function setLoadingFalse() {
    dispatch({ type: SET_LOADING_FALSE });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [state.discover_movie, state.page, state.sort]);

  return (
    <DiscoverContext.Provider
      value={{
        ...state,
        setDiscoverTv,
        setDiscoverMovies,
        nextPage,
        prevPage,
        updateSort,
      }}
    >
      {children}
    </DiscoverContext.Provider>
  );
};

export const useDiscoverContext = () => {
  return useContext(DiscoverContext);
};

export default DiscoverProvider;
