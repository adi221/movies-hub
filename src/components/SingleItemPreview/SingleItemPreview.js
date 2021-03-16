import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeContext } from '../../context/home_context';
import './SingleItemPreview.scss';
import { FaStar } from 'react-icons/fa';
import './SingleItemPreview.scss';
import { backup } from './images/backup.jpg';

const SingleItemPreview = ({
  type,
  title,
  poster_path,
  profile_path,
  vote_average,
  id,
  name,
}) => {
  const {
    config: { secure_base_url, poster_sizes },
    movies_view,
  } = useHomeContext();
  return (
    <div className='single-item-preview'>
      <Link to={`/details/${type}/${id}`}>
        <img
          className='single-item-preview__img'
          src={`${secure_base_url}${poster_sizes[1]}${
            poster_path ? poster_path : profile_path
          }`}
          alt={title}
        />
        {/* vote_average to check if the preview is for persons or tv/ movies */}
        <h3 className='single-item-preview__title'>
          {movies_view && vote_average ? title : name}
        </h3>
        {vote_average && (
          <p className='single-item-preview__rating'>
            <FaStar />
            {vote_average}
          </p>
        )}
      </Link>
    </div>
  );
};

export default SingleItemPreview;
