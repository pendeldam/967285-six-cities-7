/* eslint-disable camelcase */
import React from 'react';
import {Rating} from '../../const.js';
import {formatDate} from '../../utils';
import reviewProps from '../review-item/review-item.prop';

function ReviewItem({review}) {
  const {user, rating, comment, date} = review;
  const {name, avatar_url} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar_url} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: Rating[rating]}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toISOString().split('T')[0]}>
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
