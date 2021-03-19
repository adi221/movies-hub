import React, { useState } from 'react';
import './Navbar.scss';
import { MdExplore } from 'react-icons/md';
import { FcFilmReel } from 'react-icons/fc';
import { FaHome, FaSearch, FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { useSearchContext } from '../../context/search_context';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { query, changeQuery, fetchData, setPageTo1 } = useSearchContext();
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    let path = '/search-results';
    history.push(path);
    setPageTo1();
    fetchData();
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className={`${showNav ? 'hide' : ''}`}>
            <h1 className='nav-header__title'>
              <FcFilmReel /> Movies<span>Hub</span>
            </h1>
          </Link>

          <form
            className={`nav-header__form ${showNav ? '' : 'hide'}`}
            onSubmit={handleSubmit}
          >
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

          <button
            className='nav-header__toggle-btn'
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <MdClose /> : <FaBars />}
          </button>
        </div>

        <ul className={`links ${showNav ? '' : 'links__hide'}`}>
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
