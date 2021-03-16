import React from 'react';
import './ViewButtons.scss';
import { useHomeContext } from '../../context/home_context';

const ViewButtons = () => {
  const { setMoviesView, setTvView } = useHomeContext();
  return (
    <div className='btn-container'>
      <button onClick={setMoviesView}>Movies</button>
      <button onClick={setTvView}>TV</button>
    </div>
  );
};

export default ViewButtons;
