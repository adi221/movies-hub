import React from 'react';
import SingleItemPreview from '../SingleItemPreview/SingleItemPreview';
import './Carousel.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Carousel = ({ title, items, type }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);
  return (
    <div className='carousel-container '>
      <div className='swiper-container'>
        <div className='swiper-container__title'>{title}</div>
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            1145: {
              slidesPerView: 6,
            },
            699: {
              slidesPerView: 5,
            },
            620: {
              slidesPerView: 3,
            },
            565: {
              slidesPerView: 3,
            },
            450: {
              slidesPerView: 2,
            },
          }}
          className='swiper-wrapper'
        >
          {items.map(item => {
            return (
              <SwiperSlide key={item.id} className='swiper-slide'>
                <SingleItemPreview {...item} type={type} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <hr className='carousel-container__separator' />
    </div>
  );
};

export default Carousel;
