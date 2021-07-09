import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import reviewProps from '../review-item/review-item.prop';
import {getSortedReviews} from '../../store/selectors';
import {AuthorizationStatus} from '../../const';

function ReviewList({reviews, authorizationStatus, id}) {
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

const mapStateToProps = (state) => ({
  reviews: getSortedReviews(state),
});

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewProps),
  authorizationStatus: PropTypes.string.isRequired,
};

export {ReviewList};
export default connect(mapStateToProps)(ReviewList);
