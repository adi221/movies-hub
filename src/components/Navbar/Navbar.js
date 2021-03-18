import React from 'react';
import './Navbar.scss';
import { MdExplore } from 'react-icons/md';
import { FcFilmReel } from 'react-icons/fc';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSearchContext } from '../../context/search_context';

const Navbar = () => {
  const { query, changeQuery, fetchData } = useSearchContext();
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    console.log('You are the best');
    let path = `/search-results/${query}`;
    history.push(path);
    fetchData();
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h1 className='nav-header__title'>
              <FcFilmReel /> Movies<span>Hub</span>
            </h1>
          </Link>

          <form className='nav-header__form' onSubmit={handleSubmit}>
            <input
              className='nav-header__form-input'
              type='text'
              placeholder='Search...'
              value={query}
              onChange={e => changeQuery(e.target.value)}
            />

            <button className='nav-header__form-btn' type='submit'>
              <FaSearch />
            </button>
          </form>
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
              Discover
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
