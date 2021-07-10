import React from 'react';
import {useDispatch} from 'react-redux';
import {setActiveOffer} from '../../store/action';
import OfferCard from '../offer-card/offer-card';
import offerCardProp from './offer-card.prop';

function PlaceOfferCard(props) {
  const dispatch = useDispatch();
  const {offer} = props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => dispatch(setActiveOffer(offer))}
      onMouseLeave={() => dispatch(setActiveOffer(null))}
    >
      {offer.isPremium &&
        <div className="place-card__mark"><span>Premium</span></div>}
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
};

export default PlaceOfferCard;
