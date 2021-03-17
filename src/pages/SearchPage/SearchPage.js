import React, { useEffect } from 'react';
import { useSearchContext } from '../../context/search_context';
import './SearchPage.scss';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const { id } = useParams();
  const { data } = useSearchContext();

  return <>Search Page</>;
};

export default SearchPage;
