import React from 'react';
import { useHomeContext } from '../../context/home_context';
import './HomeHeader.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const HomeHeader = () => {
  const {
    movies_view,
    config: { secure_base_url, backdrop_sizes },
    movies: { now_playing: nowPlaying },
    tv: { popular },
  } = useHomeContext();

  const items = movies_view ? nowPlaying.slice(0, 3) : popular.slice(0, 3);
  const type = movies_view ? 'movies' : 'tv';

  SwiperCore.use([Autoplay]);

  return (
    <div className='home-header-container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className='swiper-wrapper'
      >
        {items.map((item, index) => {
          const { id, backdrop_path, title, name } = item;
          return (
            <SwiperSlide
              key={id}
              className='swiper-slide'
              style={{
                background: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ) center center no-repeat, #fff url(${secure_base_url}${backdrop_sizes[2]}${backdrop_path}) center top no-repeat`,
                backgroundSize: 'cover, cover',
              }}
            >
              <Link to={`/details/${type}/${id}`}>
                <div className='swiper-slide__textbox'>
                  <p className='swiper-slide__latest'>latest</p>
                  <h3 className='swiper-slide__title'>
                    {movies_view ? title : name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeHeader;
