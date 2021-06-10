import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerProps from '../offer-card/offer-card.prop';

function OfferList({offers}) {
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} setActiveOffer={setActiveOffer}/>)}
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProps).isRequired,
};

export default OfferList;
