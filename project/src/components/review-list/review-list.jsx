import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getSortedReviews} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/app-user/selectors';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus} from '../../const';

function ReviewList({id}) {
  const reviews = useSelector(getSortedReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH &&
        <ReviewForm id={id}/>}
    </section>
  );
}

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewList;
