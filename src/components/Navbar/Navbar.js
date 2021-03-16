import React from 'react';
import './Navbar.scss';
import { MdExplore } from 'react-icons/md';
import { FcFilm } from 'react-icons/fc';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1 className='nav-header__title'>
            <FcFilm /> Movies<span>Hub</span>
          </h1>
        </div>
        <div className='search'>
          <input type='text' placeholder='Search...' />
        </div>
        <ul className='links'>
          <Link to='/'>
            <li>
              <FaHome />
              Home
            </li>
          </Link>
          <Link to='/dicover'>
            <li>
              <MdExplore />
              Explore
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
