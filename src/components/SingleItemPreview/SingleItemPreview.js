import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeContext } from '../../context/home_context';
import './SingleItemPreview.scss';
import { FaStar } from 'react-icons/fa';
import './SingleItemPreview.scss';
import backupPic from './images/backup.png';

const SingleItemPreview = ({
  type,
  title,
  poster_path,
  profile_path,
  vote_average,
  id,
  name,
  character,
}) => {
  const {
    config: { secure_base_url },
  } = useHomeContext();

  return (
    <div className='single-item-preview'>
      <Link to={`/details/${type}/${id}`}>
        <img
          className='single-item-preview__img'
          src={`${
            profile_path || poster_path
              ? `${secure_base_url}w154${
                  poster_path ? poster_path : profile_path
                } `
              : backupPic
          }`}
          alt={title}
        />
        {/* vote_average to check if the preview is for persons or tv/ movies */}
        <h3 className='single-item-preview__title'>
          {vote_average && title ? title : name}
        </h3>
        {character && (
          <p className='single-item-preview__character'>{character}</p>
        )}
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

// src={`${secure_base_url}w154${
//   poster_path ? poster_path : profile_path
// } `}
