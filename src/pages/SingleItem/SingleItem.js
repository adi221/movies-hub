import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSingleItemContext } from '../../context/single_item_context';
import { useHomeContext } from '../../context/home_context';
import { SingleItemHeader } from '../../components';
import './SingleItem.scss';
import { Carousel, TrailersCarousel, Loading } from '../../components';
import { IoIosArrowForward } from 'react-icons/io';

const SingleItem = () => {
  const { type, id } = useParams();
  const { fetchData, item, isLoading, person } = useSingleItemContext();
  const { loading } = useHomeContext();

  useEffect(() => {
    fetchData(id, type);
    //eslint-disable-next-line
  }, [id, type]);

  if (loading || isLoading || (type === 'people' && !person.details)) {
    return <Loading />;
  }

  return (
    <div className='single-item'>
      <SingleItemHeader item={item} showPeople={type === 'people'} />
      <div className='single-item-main'>
        <div className='single-item-main__summary'>
          <h2 className='single-item-main__summary-title'>{`${
            type === 'people' ? 'biography' : 'summary'
          }`}</h2>
          <p>{`${
            type === 'people' ? person.details.biography : item.details.overview
          }`}</p>
          <hr />
        </div>
        {type === 'people' && (
          <Carousel
            title='popular roles'
            type={`${person.cast.media_type === 'movie' ? 'movies' : 'tv'}`}
            items={person.cast}
          />
        )}
        <Carousel title='cast' type='people' items={item.credits} />
        {item.trailers.length > 0 && (
          <TrailersCarousel title='trailers' items={item.trailers} />
        )}
        {item.reviews.length > 0 && (
          <div className='single-item-main__reviews'>
            <h2 className='single-item-main__summary-title'>Popular reviews</h2>
            <div className='single-item-main__reviews-container'>
              {item.reviews.slice(0, 3).map(review => {
                const {
                  id,
                  author_details: { name },
                  content,
                  url,
                } = review;
                return (
                  <article
                    key={id}
                    className='single-item-main__reviews-review'
                  >
                    <h2>{name ? name : 'Arthur'}</h2>
                    <p>{content.substring(0, 300)}...</p>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                      Read full review <IoIosArrowForward />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleItem;
