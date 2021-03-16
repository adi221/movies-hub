import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSingleItemContext } from '../../context/single_item_context';
import { SingleItemHeader } from '../../components';
import './SingleItem.scss';
import { Carousel, TrailersCarousel } from '../../components';
import { IoIosArrowForward } from 'react-icons/io';

const SingleItem = () => {
  const { type, id } = useParams();
  const { fetchData, item } = useSingleItemContext();

  useEffect(() => {
    fetchData(id, type);
    //eslint-disable-next-line
  }, [id, type]);

  if (!item.details) {
    return <h1>Loading</h1>;
  }

  return (
    <div className='single-item'>
      <SingleItemHeader item={item} />
      <div className='single-item-main'>
        <div className='single-item-main__summary'>
          <h2 className='single-item-main__summary-title'>Summary</h2>
          <p>{item.details.overview}</p>
          <hr />
        </div>

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
                    <a href={url}>
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
