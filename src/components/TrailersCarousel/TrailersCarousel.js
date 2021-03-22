import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const TrailersCarousel = ({ title, items }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className='carousel-container'>
      <div className='swiper-container'>
        <div className='swiper-container__title'>{title}</div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            930: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 1,
            },
          }}
          className='swiper-wrapper'
        >
          {items.map(item => {
            return (
              <SwiperSlide key={item.id} className='swiper-slide'>
                <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title='1'
                  width='420'
                  height='315'
                ></iframe>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <hr />
    </div>
  );
};

export default TrailersCarousel;
