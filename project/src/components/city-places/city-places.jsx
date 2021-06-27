/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Sorting from '../sorting/sorting';
import OffersList from '../offer-list/offer-list';
import PlaceOfferCard from '../offer-card/place-offer-card';
import cityProp from '../cities-container/city.prop';
import offerCardProp from '../offer-card/offer-card.prop';
import {sortOffers} from '../../sort';

function CityPlaces({city, offers, sortType, setSortType, setActiveOffer}) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city.name}</b>
      <Sorting
        sortType={sortType}
        setSortType={setSortType}
      />

      <OffersList
        styles={{main: 'cities__places-list places__list tabs__content'}}
        render={() => (
          sortOffers(sortType, offers).map((offer) => (
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
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  setActiveOffer: PropTypes.func.isRequired,
};

const mapStateToProps = ({sortType}) => ({
  sortType,
});

const mapDispatchToProps = (dispatch) => ({
  setSortType(type) {
    dispatch(ActionCreator.setSortType(type));
  },
});

export {CityPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(CityPlaces);
