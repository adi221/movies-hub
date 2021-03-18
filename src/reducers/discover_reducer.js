import {
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_EXPLORE_DATA,
  SET_DISCOVER_MOVIES,
  SET_DISCOVER_TV,
  NEXT_PAGE,
  PREV_PAGE,
  UPDATE_SORT,
  SET_PAGE_1,
} from '../actions';

const discover_reducer = (state, action) => {
  if (action.type === SET_EXPLORE_DATA) {
    const { total_pages, results } = action.payload;
    return { ...state, data: results, total_pages };
  }
  if (action.type === SET_DISCOVER_MOVIES) {
    return { ...state, discover_movie: true };
  }
  if (action.type === SET_DISCOVER_TV) {
    return { ...state, discover_movie: false };
  }
  if (action.type === NEXT_PAGE) {
    let newPage = state.page + 1;
    if (newPage > state.total_pages) {
      newPage = 1;
    }
    return { ...state, page: newPage };
  }
  if (action.type === PREV_PAGE) {
    let newPage = state.page - 1;
    if (newPage < 1) {
      newPage = state.total_pages;
    }
    return { ...state, page: newPage };
  }
  if (action.type === SET_LOADING_TRUE) {
    return { ...state, loading: true };
  }
  if (action.type === SET_LOADING_FALSE) {
    return { ...state, loading: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SET_PAGE_1) {
    return { ...state, page: 1 };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default discover_reducer;
