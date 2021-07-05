import {createSelector} from 'reselect';

const getCity = (state) => state.city;
const getOffers = (state) => state.offers;
const getReviews = (state) => state.reviews;

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

export const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => reviews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10),
);
