import React from 'react';
import './ViewButtons.scss';

const ViewButtons = ({ clickedMovies, clickedTv }) => {
  return (
    <div className='btn-container'>
      <button onClick={clickedMovies}>Movies</button>
      <button onClick={clickedTv}>TV</button>
    </div>
  );
};

export default ViewButtons;
