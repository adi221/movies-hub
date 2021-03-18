import React from 'react';
import './PaginationButtons.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const PaginationButtons = ({ next, prev, total, page }) => {
  return (
    <div className='pagination-container'>
      <button className='pagination-container__btn' onClick={prev}>
        <IoIosArrowBack /> Prev
      </button>
      <p className='pagination-container__text'>
        Page {page} of {total}
      </p>
      <button className='pagination-container__btn' onClick={next}>
        Next <IoIosArrowForward />
      </button>
    </div>
  );
};

export default PaginationButtons;
