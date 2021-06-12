import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import reviewProps from '../review-item/review-item.prop';

function Reviews({reviews}) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
      </ul>
      <ReviewForm/>
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProps),
};

export default Reviews;
