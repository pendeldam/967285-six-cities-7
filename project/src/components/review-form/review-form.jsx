import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {postComment} from '../../store/api-actions';
import ErrorPopup from '../error-popup/error-popup';
import {CONNECTION_STATUS, RatingWords} from '../../const';

function ReviewFrom({id, comment, rating, sendComment, setComment, setRating, isCommentLoaded}) {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        sendComment(id, {comment, rating});
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingWords).reverse().map(([key, value]) => (
          <Fragment key={key}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={key}
              id={`${key}-stars`}
              type="radio"
              onChange={(evt) => setRating(+evt.target.value)}
              disabled={isCommentLoaded === CONNECTION_STATUS.WAIT}
              checked={rating === +key}
            />
            <label htmlFor={`${key}-stars`} className="reviews__rating-label form__rating-label" title={value}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => setComment(evt.target.value)}
        disabled={isCommentLoaded === CONNECTION_STATUS.WAIT}
        value={comment}
      />
      <div className="reviews__button-wrapper">
        {isCommentLoaded === CONNECTION_STATUS.ERROR &&
        <ErrorPopup
          style={{bottom: '-40px'}}
          message={'Connection error. Please, try later...'}
        />}
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || comment.length < 50 || comment.length > 300}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = ({comment, rating, isCommentLoaded}) => ({
  comment,
  rating,
  isCommentLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  setComment(comment) {
    dispatch(ActionCreator.setComment(comment));
  },
  setRating(rating) {
    dispatch(ActionCreator.setRating(rating));
  },
  sendComment(id, comment) {
    dispatch(postComment(id, comment));
  },
});


ReviewFrom.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  setComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  sendComment: PropTypes.func.isRequired,
  isCommentLoaded: PropTypes.string.isRequired,
};

export {ReviewFrom};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewFrom);
