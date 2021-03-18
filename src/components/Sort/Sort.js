import React from 'react';
import './Sort.scss';
import { useDiscoverContext } from '../../context/discover_context';

const movieFilters = [
  'Most Popular',
  'Highest Rated',
  'Highest Grossing Revenue',
];
const tvFilters = ['Most Popular', 'Highest Rated'];
const filterValue = ['popularity.desc', 'vote_average.desc', 'revenue.desc'];

const Sort = () => {
  const { discover_movie, sort, updateSort } = useDiscoverContext();
  const currentFilters = discover_movie ? movieFilters : tvFilters;
  return (
    <ul className='sort-container'>
      {currentFilters.map((filter, index) => {
        return (
          <li
            key={index}
            className={`sort-container__item ${
              sort === filterValue[index] ? 'active-item' : ''
            }`}
            name={filterValue[index]}
            onClick={e => updateSort(filterValue[index])}
          >
            {filter}
          </li>
        );
      })}
    </ul>
  );
};

export default Sort;
