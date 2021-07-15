import React from 'react';
import {formatDate, roundRating} from '../../utils';
import {RatingPercent} from '../../const';
import reviewProps from '../review-item/review-item.prop';

function ReviewItem({review}) {
  const {user, rating, comment, date} = review;
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: RatingPercent[roundRating(rating)]}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.split('T')[0]}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: reviewProps,
};

export default ReviewItem;
