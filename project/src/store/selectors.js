import {createSelector} from 'reselect';

const getCity = (state) => state.city;
const getOffers = (state) => state.offers;

export const getCityOffers = createSelector(
  [getCity, getOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city.name),
);

export const getFavorites = createSelector(
  [getCity, getOffers],
  (city, offers) => offers.filter((offer) => (
    offer.city.name === city.name && offer.is_favorite === true
  )),
);
