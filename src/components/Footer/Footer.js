import React from 'react';
import './Footer.scss';
import logo from './images/TMDBLogo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <img src={logo} alt='tmdb' />
      </div>
      <h2>Copyright &copy; {new Date().getFullYear()}</h2>
    </footer>
  );
};

export default Footer;
