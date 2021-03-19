import React from 'react';
import './ShareBar.scss';
import { FaFacebook, FaTwitter, FaGoogle, FaReddit } from 'react-icons/fa';

const ShareBar = ({ url, title }) => {
  return (
    <div className='share-bar'>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className='share-bar__link facebook'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaFacebook />
      </a>
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}&viatwitterhandle`}
        className='share-bar__link twitter'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaTwitter />
      </a>
      <a
        href={`https://plus.google.com/share?url=${url}`}
        className='share-bar__link google'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGoogle />
      </a>
      <a
        href={`http://reddit.com/submit?url=${url}`}
        className='share-bar__link reddit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaReddit />
      </a>
    </div>
  );
};

export default ShareBar;
