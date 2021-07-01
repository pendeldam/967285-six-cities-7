import React from 'react';
import OfferCard from '../offer-card/offer-card';
import offerCardProp from './offer-card.prop';

function NearestOfferCard(props) {
  const {offer} = props;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <OfferCard {...props}/>
    </article>
  );
}

NearestOfferCard.propTypes = {
  offer: offerCardProp,
};

export default NearestOfferCard;
