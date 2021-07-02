import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerCardProp from './offer-card.prop';

function PlaceOfferCard(props) {
  const {offer, setActiveOffer} = props;

  return (
    <article
      onMouseEnter={() => {
        setActiveOffer(offer);
      }}
      onMouseLeave={() => {
        setActiveOffer(null);
      }}
      className="cities__place-card place-card"
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>

      <OfferCard {...props}/>
    </article>
  );
}

PlaceOfferCard.propTypes = {
  offer: offerCardProp,
  setActiveOffer: PropTypes.func.isRequired,
};

export default PlaceOfferCard;
