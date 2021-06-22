/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offer-list/offer-list';
import PlaceOfferCard from '../offer-card/place-offer-card';
import cityProp from '../cities-container/city.prop';
import offerCardProp from '../offer-card/offer-card.prop';

function CityPlaces({city, offers}) {
  const [_activeOffer, setActiveOffer] = useState(null);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city.name}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by&nbsp;</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>

      <OffersList
        styles={{main: 'cities__places-list places__list tabs__content'}}
        render={() => (
          offers.map((offer) => (
            <PlaceOfferCard
              styles={{article: 'cities__place-card'}}
              key={offer.id}
              offer={offer}
              setActiveOffer={setActiveOffer}
            />
          ))
        )}
      />
    </section>
  );
}

CityPlaces.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default CityPlaces;
