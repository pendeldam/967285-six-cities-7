import React from 'react';
import OfferCard from '../offer-card/offer-card';
import offerCardProp from './offer-card.prop';

function FavoriteOfferCard(props) {
  const {offer} = props;
  const restProps = {...props};

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.preview_image.url} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <OfferCard {...restProps}/>
    </article>
  );
}

FavoriteOfferCard.propTypes = {
  offer: offerCardProp,
};

export default FavoriteOfferCard;
