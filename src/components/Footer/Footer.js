import React from 'react';
import './Footer.scss';
import logo from './images/TMDBLogo.svg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FcFilmReel } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <div className='footer-center__main'>
          <div className='footer-center__main-links'>
            <h1>
              <FcFilmReel />
              Movies Hub
            </h1>
            <Link to='/'>Home</Link>
            <Link to='/search-results'>Search</Link>
            <Link to='/discover'>Discover</Link>
          </div>
          <p className='footer-center__main-text'>
            <span>Portfolio :</span>
            <a
              href='https://adi-mizrahi.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              adi-mizrahi.com
            </a>
          </p>
        </div>
        <div className='footer-center__tmdb'>
          <img src={logo} alt='tmdb' />
          <div className='footer-center__tmdb-social'>
            <a
              href='https://www.facebook.com/themoviedb'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
            <a
              href='https://twitter.com/themoviedb'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <h2>Copyright &copy; {new Date().getFullYear()}</h2>
    </footer>
  );
};

export default Footer;
