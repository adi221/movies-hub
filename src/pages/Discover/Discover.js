import React from 'react';
import './Discover.scss';
import {
  Navbar,
  Loading,
  ViewButtons,
  SingleItemPreview,
  PaginationButtons,
  Sort,
} from '../../components';
import { useDiscoverContext } from '../../context/discover_context';

const Discover = () => {
  const {
    loading,
    data,
    discover_movie,
    setDiscoverTv,
    setDiscoverMovies,
    nextPage,
    prevPage,
    total_pages: total,
    page,
  } = useDiscoverContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='discover-page-container'>
      <Navbar />
      <h1 className='discover-page-container__title'>
        Discover {discover_movie ? 'movies' : 'tv'}
      </h1>
      <div className='discover-page-container__underline'></div>
      <ViewButtons
        clickedTv={setDiscoverTv}
        clickedMovies={setDiscoverMovies}
      />
      <Sort />
      <div className='discover-page-container__main'>
        {data.map(item => {
          return (
            <SingleItemPreview
              key={item.id}
              {...item}
              type={discover_movie ? 'movies' : 'tv'}
            />
          );
        })}
      </div>
      <PaginationButtons
        next={nextPage}
        prev={prevPage}
        total={total}
        page={page}
      />
    </div>
  );
};

export default Discover;
