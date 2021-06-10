/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import offerProps from '../offer-card/offer-card.prop';

const Rating = {
  1: '20%',
  2: '40%',
  3: '60%',
  4: '80%',
  5: '100%',
};

function OfferCard({offer, setActiveOffer}) {
  const {id, price, type, rating, is_premium, preview_image, title} = offer;
  
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => {setActiveOffer(id)}}>
      {is_premium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={preview_image.url} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: offerProps,
  setActiveOffer: PropTypes.func.isRequired,
};

export default OfferCard;
