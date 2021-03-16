import React, { useState, useEffect, useContext } from 'react';

import {
  singleMovieForeword,
  singleMovieDetails,
  singleMovieCredits,
  singleMovieTrailers,
  singleMovieReviews,
  singleTvForeword,
  singleTvDetails,
  singleTvCredits,
  singleTvTrailers,
  singleTvReviews,
  singlePersonForeword,
  singlePersonDetails,
  singlePersonCombinedCredits,
} from '../utils/constants';
import { getJSONSingleItem } from '../utils/helpers';

const SingleItemContext = React.createContext();

const SingleItemProvider = ({ children }) => {
  const [item, setItem] = useState({});

  const fetchMovie = async id => {
    const data = await Promise.all([
      getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieDetails}`),
      getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieCredits}`),
      getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieTrailers}`),
      getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieReviews}`),
    ]);
    const [details, credits, trailers, reviews] = data;
    setItem({
      details,
      credits: credits.cast,
      trailers: trailers.results,
      reviews: reviews.results,
    });
  };

  const fetchTv = async id => {
    const data = await Promise.all([
      getJSONSingleItem(`${singleTvForeword}${id}${singleTvDetails}`),
      getJSONSingleItem(`${singleTvForeword}${id}${singleTvCredits}`),
      getJSONSingleItem(`${singleTvForeword}${id}${singleTvTrailers}`),
      getJSONSingleItem(`${singleTvForeword}${id}${singleTvReviews}`),
    ]);
    const [details, credits, trailers, reviews] = data;
    setItem({
      details,
      credits: credits.cast,
      trailers: trailers.results,
      reviews: reviews.results,
    });
  };

  const fetchPerson = async id => {
    const data = await Promise.all([
      getJSONSingleItem(`${singlePersonForeword}${id}${singlePersonDetails}`),
      getJSONSingleItem(
        `${singlePersonForeword}${id}${singlePersonCombinedCredits}`
      ),
    ]);
    console.log(data);
  };

  const fetchData = (id, type) => {
    if (type === 'movies') {
      fetchMovie(id);
    } else if (type === 'tv') {
      fetchTv(id);
    } else {
      fetchPerson(id);
    }
  };

  return (
    <SingleItemContext.Provider value={{ fetchData, item }}>
      {children}
    </SingleItemContext.Provider>
  );
};

export const useSingleItemContext = () => {
  return useContext(SingleItemContext);
};

export default SingleItemProvider;
