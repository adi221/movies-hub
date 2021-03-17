import {
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_QUERY,
  SET_SEARCH_DATA,
} from '../actions';

const search_reducer = (state, action) => {
  if (action.type === SET_QUERY) {
    return { ...state, query: action.payload };
  }
  if (action.type === SET_SEARCH_DATA) {
    return { ...state, data: action.payload };
  }
  if (action.type === SET_LOADING_TRUE) {
    return { ...state, loading: true };
  }
  if (action.type === SET_LOADING_FALSE) {
    return { ...state, loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default search_reducer;
