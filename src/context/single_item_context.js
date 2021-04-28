import React, { useState, useContext } from 'react';

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
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showShareBar, setShowShareBar] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async id => {
    setIsLoading(true);
    try {
      const data = await Promise.all([
        getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieDetails}`),
        getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieCredits}`),
        getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieTrailers}`),
        getJSONSingleItem(`${singleMovieForeword}${id}${singleMovieReviews}`),
      ]);

      const [details, credits, trailers, reviews] = data;
      if (details.success === false) return setError(true);
      setItem({
        details,
        credits: credits.cast,
        trailers: trailers.results,
        reviews: reviews.results,
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  const fetchTv = async id => {
    setIsLoading(true);
    try {
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
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchPerson = async id => {
    setIsLoading(true);
    try {
      const data = await Promise.all([
        getJSONSingleItem(`${singlePersonForeword}${id}${singlePersonDetails}`),
        getJSONSingleItem(
          `${singlePersonForeword}${id}${singlePersonCombinedCredits}`
        ),
      ]);
      const [details, credits] = data;
      setPerson({
        details,
        cast: credits.cast.slice(0, 25),
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  const fetchData = (id, type) => {
    setIsLoading(true);
    if (type === 'movies') {
      fetchMovie(id);
    } else if (type === 'tv') {
      fetchTv(id);
    } else {
      fetchPerson(id);
    }
  };

  return (
    <SingleItemContext.Provider
      value={{
        fetchData,
        item,
        isLoading,
        person,
        setIsLoading,
        showShareBar,
        setShowShareBar,
        error,
      }}
    >
      {children}
    </SingleItemContext.Provider>
  );
};

export const useSingleItemContext = () => {
  return useContext(SingleItemContext);
};

export default SingleItemProvider;
