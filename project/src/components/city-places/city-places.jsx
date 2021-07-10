import React from 'react';
import {useSelector} from 'react-redux';
import Sorting from '../sorting/sorting';
import OffersList from '../offer-list/offer-list';
import PlaceOfferCard from '../offer-card/place-offer-card';
import {getSortedOffers} from '../../store/app-data/selectors';
import cityProp from '../cities-container/city.prop';

function CityPlaces({city}) {
  const offers = useSelector(getSortedOffers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city.name}</b>
      <Sorting/>

      <OffersList
        styles={{main: 'cities__places-list places__list tabs__content'}}
        render={() => (
          offers.map((offer) => (
            <PlaceOfferCard
              styles={{article: 'cities__place-card'}}
              key={offer.id}
              offer={offer}
            />
          ))
        )}
      />
    </section>
  );
}

CityPlaces.propTypes = {
  city: cityProp,
};

export default CityPlaces;
