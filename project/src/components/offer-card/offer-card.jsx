import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import offerProps from '../offer-card/offer-card.prop';
import stylesProp from './styles.prop';
import {AppRoute, RatingPercent} from '../../const';
import {roundRating} from '../../utils';

function OfferCard({offer, styles}) {
  const {id, price, type, rating, title} = offer;

  return (
    <div className={`${styles.article === 'favorites__card' ? styles.info : 'place-card__info'}`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}&nbsp;</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <FavoriteButton
          id={offer.id}
          styles={{
            bookmark: 'place-card',
            width: 18,
            height: 19,
          }}
        />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: RatingPercent[roundRating(rating)]}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        {<Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>}
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
