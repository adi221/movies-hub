import React, { useRef, useEffect } from 'react';
import SingleItemPreview from '../SingleItemPreview/SingleItemPreview';
import './Carousel.scss';
import Swiper from 'swiper';

const Carousel = ({ title, items, type }) => {
  const swiper = useRef(null);
  useEffect(() => {
    swiper.current = new Swiper('.swiper-container', {
      init: true,
      slidesPerView: 7,
      loop: true,
      spaceBetween: 14,
      observer: true,

      breakpoints: {
        1145: {
          slidesPerView: 5,
        },
        699: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className='carousel-container'>
      <div className='swiper-container'>
        <div className='swiper-container__title'>{title}</div>
        <div className='swiper-wrapper'>
          {items.map(item => {
            return (
              <SingleItemPreview
                className='swiper-slide'
                key={item.id}
                {...item}
                type={type}
              />
            );
          })}
        </div>
        <div className='swiper-pagination'></div>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
      <hr className='carousel-container__separator' />
    </div>
  );
};

export default Carousel;
