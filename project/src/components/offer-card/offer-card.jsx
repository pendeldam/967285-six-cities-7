/* eslint-disable camelcase */
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import offerProps from '../offer-card/offer-card.prop';
import stylesProp from './styles.prop';
import {AppRoute, Rating} from '../../const';

function OfferCard({offer, styles}) {
  const history = useHistory();
  const {id, price, type, rating, title} = offer;

  const bookmarkBtnStyle = `place-card__bookmark-button
    ${offer.is_favorite
    ? `place-card__bookmark-button--active button`
    : `button`}`;

  return (
    <div className={`${styles.article === `favorites__card` ? styles.info : `place-card__info`}`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}&nbsp;</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkBtnStyle} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: Rating[rating]}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
      {<Link to={`${AppRoute.OFFER}/${id}`} onClick={() => history.push(`${AppRoute.OFFER}/${id}`)}>{title}</Link>}
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

OfferCard.propTypes = {
  offer: offerProps,
  styles: stylesProp.isRequired,
};

export default OfferCard;
