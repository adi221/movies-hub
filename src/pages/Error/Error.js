import React from 'react';
import './Error.scss';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-page'>
      <Navbar />
      <h1 className='error-page__title'>Something went wrong...</h1>
      <Link to='/' className='error-page__btn'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
