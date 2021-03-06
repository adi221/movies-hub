import React from 'react';
import { useHomeContext } from '../../context/home_context';
import {
  ViewButtons,
  Navbar,
  HomeHeader,
  Carousel,
  Loading,
} from '../../components';
import './Home.scss';

const Home = () => {
  const {
    movies,
    tv,
    movies_view,
    loading,
    setMoviesView,
    setTvView,
  } = useHomeContext();

  if (loading) {
    return <Loading />;
  }

  let mainView;
  if (movies_view) {
    const {
      upcoming,
      popular,
      now_playing: nowPlaying,
      top_rated: topRated,
    } = movies;

    const type = 'movies';
    mainView = (
      <div>
        <Carousel title='Upcoming' items={upcoming} type={type} />
        <Carousel title='Popular' items={popular} type={type} />
        <Carousel title='Now Playing' items={nowPlaying} type={type} />
        <Carousel title='Top Rated' items={topRated} type={type} />
      </div>
    );
  } else {
    const {
      airing_today: airingToday,
      popular,
      on_the_air: onTheAir,
      top_rated: topRated,
    } = tv;
    const type = 'tv';
    mainView = (
      <div>
        <Carousel title='Airing Today' items={airingToday} type={type} />
        <Carousel title='Popular' items={popular} type={type} />
        <Carousel title='On The Air' items={onTheAir} type={type} />
        <Carousel title='Top Rated' items={topRated} type={type} />
      </div>
    );
  }

  return (
    <div className='home-container'>
      <Navbar />
      <HomeHeader />
      <ViewButtons clickedMovies={setMoviesView} clickedTv={setTvView} />
      <div className='home-container__main'>{mainView}</div>
    </div>
  );
};

export default Home;
