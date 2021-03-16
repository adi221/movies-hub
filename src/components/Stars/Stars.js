import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import './Stars.scss';

const Stars = ({ rating }) => {
  const stars = (rating / 2).toFixed(2);
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className='stars'>
      <p className='stars__rating'>{rating}</p>
      <div className='stars__stars'>{tempStars}</div>
    </div>
  );
};

export default Stars;
