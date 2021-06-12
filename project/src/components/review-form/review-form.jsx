import React, {Fragment, useState} from 'react';

const Rating = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function ReviewFrom() {
  const [review, setReview] = useState({
    comment: '',
    rating: null,
  });

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => evt.preventDefault()}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(Rating).reverse().map(([key, value]) => (
          <Fragment key={key}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={key}
              id={`${key}-stars`}
              type="radio"
              onChange={(evt) => setReview(Object.assign({}, review, {rating: +evt.target.value}))}
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
        onChange={(evt) => setReview(Object.assign({}, review, {comment: evt.target.value}))}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!review.rating || review.comment.length < 50 || review.comment.length > 300}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewFrom;
