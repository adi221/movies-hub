import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeContext } from '../../context/home_context';
import './SingleItemPreview.scss';
import { FaStar } from 'react-icons/fa';
import './SingleItemPreview.scss';

const SingleItemPreview = ({ type, title, poster_path, vote_average, id }) => {
  const {
    config: { secure_base_url, poster_sizes },
  } = useHomeContext();
  return (
    <div className='single-item-preview'>
      <Link to={`/details/${type}/${id}`}>
        <img
          className='single-item-preview__img'
          src={`${secure_base_url}${poster_sizes[1]}${poster_path}`}
          alt={title}
        />
        <h3 className='single-item-preview__title'>{title}</h3>
        <p className='single-item-preview__rating'>
          <FaStar />
          {vote_average}
        </p>
      </Link>
    </div>
  );
};

export default SingleItemPreview;
