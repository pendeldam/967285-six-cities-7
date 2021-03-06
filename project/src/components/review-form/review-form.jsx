import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getComment, getRating} from '../../store/app-data/selectors';
import {getIsCommentLoaded} from '../../store/app-state/selectors';
import {setComment, setRating} from '../../store/action';
import {postComment} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorPopup from '../error-popup/error-popup';
import {PopupType, RatingWords, CONNECTION_STATUS, MIN_OFFER_COMMENT_LENGTH, MAX_OFFER_COMMENT_LENGTH} from '../../const';

function ReviewFrom({id}) {
  const dispatch = useDispatch();

  const comment = useSelector(getComment);
  const rating = useSelector(getRating);
  const isCommentLoaded = useSelector(getIsCommentLoaded);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(
          postComment(id, {comment, rating}),
        );
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
              onChange={(evt) => dispatch(setRating(+evt.target.value))}
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
      {isCommentLoaded === CONNECTION_STATUS.WAIT ?
        <LoadingScreen/> :
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={(evt) => dispatch(setComment(evt.target.value))}
          disabled={isCommentLoaded === CONNECTION_STATUS.WAIT}
          value={comment}
        />}
      <div className="reviews__button-wrapper">
        {isCommentLoaded === CONNECTION_STATUS.ERROR &&
        <ErrorPopup
          id={PopupType.COMMENT}
          style={{left: '35vw'}}
          message={'Connection error. Please, try later...'}
        />}
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || comment.length < MIN_OFFER_COMMENT_LENGTH || comment.length > MAX_OFFER_COMMENT_LENGTH}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

ReviewFrom.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewFrom;
