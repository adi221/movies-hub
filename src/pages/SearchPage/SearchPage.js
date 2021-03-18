import React, { useEffect } from 'react';
import { useSearchContext } from '../../context/search_context';
import './SearchPage.scss';
import { useParams } from 'react-router-dom';
import {
  Loading,
  Navbar,
  SingleItemPreview,
  PaginationButtons,
} from '../../components';

const SearchPage = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    query,
    changeQuery,
    nextPage,
    prevPage,
    page,
    total_pages: total,
  } = useSearchContext();

  // useEffect(() => {
  //   if (id !== query) {
  //     changeQuery(id);
  //   }
  // }, []);

  if (loading) {
    return <Loading />;
  }

  const handleType = item => {
    return item.media_type === 'movie'
      ? 'movies'
      : item.media_type === 'tv'
      ? 'tv'
      : 'people';
  };

  return (
    <div className='search-page-container'>
      <Navbar />
      <h1 className='search-page-container__title'>
        {`${
          data.length === 0
            ? 'Enter search keyowrd'
            : `Search results for ${query}`
        }`}
      </h1>
      <div className='search-page-container__underline'></div>
      <div className='search-page-container__main'>
        {data.map(item => {
          return (
            <SingleItemPreview
              key={item.id}
              {...item}
              type={handleType(item)}
            />
          );
        })}
      </div>
      {total > 1 && (
        <PaginationButtons
          next={nextPage}
          prev={prevPage}
          total={total}
          page={page}
        />
      )}
    </div>
  );
};

export default SearchPage;
