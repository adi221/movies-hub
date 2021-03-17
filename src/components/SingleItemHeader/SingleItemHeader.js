import React from 'react';
import './SingleItemHeader.scss';
import { useHomeContext } from '../../context/home_context';
import { useSingleItemContext } from '../../context/single_item_context';
import { IoIosArrowBack } from 'react-icons/io';
import { FaShare } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Stars from '../../components/Stars/Stars';
import { Loading } from '../../components';

const SingleItemHeader = ({ item, showPeople }) => {
  const {
    config: { secure_base_url },
  } = useHomeContext();
  const { person, isLoading } = useSingleItemContext();
  let {
    backdrop_path: bg,
    original_language: lang,
    title,
    name,
    poster_path: image,
    vote_average: rating,
    status,
  } = item.details;
  const history = useHistory();

  if (isLoading || (showPeople && !person.details)) {
    return <Loading />;
  }

  if (showPeople) {
    name = person.details.name;
    title = person.details.name;
    image = person.details.profile_path;
    status = person.details.known_for_department;
    lang = person.details.birthday.split('-').reverse().join('-');
  }

  return (
    <header
      className='single-item-header'
      style={{
        background: `linear-gradient(
rgba(0, 0, 0, 0.6),
rgba(0, 0, 0, 0.6)
) , #fff url(${secure_base_url}${'w1280'}${bg}) center top no-repeat`,
      }}
    >
      <div className='single-item-header__center'>
        <div className='single-item-header-nav'>
          <button onClick={() => history.goBack()}>
            <IoIosArrowBack className='single-item-header-nav__icon' />
          </button>
          <button>
            <FaShare className='single-item-header-nav__icon' />
          </button>
        </div>
        <div className='single-item-header-content'>
          <img
            src={`${secure_base_url}w154${image}`}
            alt={title ? title : name}
          />
          <div className='single-item-header-content__text'>
            <h1 className='single-item-header-content__title'>
              {title ? title : name}
            </h1>
            {!showPeople && (
              <div className='single-item-header-content__rating'>
                <Stars rating={rating} />
              </div>
            )}
            <p className='single-item-header-content__status'>
              {status} | <span>{lang}</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SingleItemHeader;
