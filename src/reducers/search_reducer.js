import {
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_QUERY,
  SET_SEARCH_DATA,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE_1,
} from '../actions';

const search_reducer = (state, action) => {
  if (action.type === SET_QUERY) {
    return { ...state, query: action.payload };
  }
  if (action.type === SET_SEARCH_DATA) {
    const { results, total_pages } = action.payload;
    return { ...state, data: results, total_pages };
  }
  if (action.type === SET_LOADING_TRUE) {
    return { ...state, loading: true };
  }
  if (action.type === SET_LOADING_FALSE) {
    return { ...state, loading: false };
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
  if (action.type === SET_PAGE_1) {
    return { ...state, page: 1 };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default search_reducer;
