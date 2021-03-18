import React, { useEffect } from 'react';
import { useSearchContext } from '../../context/search_context';
import './SearchPage.scss';
import { useParams } from 'react-router-dom';
import { Loading, Navbar, SingleItemPreview } from '../../components';

const SearchPage = () => {
  const { id } = useParams();
  const { data, loading } = useSearchContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='search-page-container'>
      <Navbar />
      <div className='search-page-container__main'></div>
    </div>
  );
};

export default SearchPage;
