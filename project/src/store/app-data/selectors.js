import {createSelector} from 'reselect';
import {SortTypes} from '../../const';

const getReviews = ({DATA}) => DATA.reviews;

export const getSortType = ({DATA}) => DATA.sortType;

export const getOffers = ({DATA}) => DATA.offers;

export const getCity = ({DATA}) => DATA.city;

export const getOffer = ({DATA}) => DATA.offer;

export const getActiveOffer = ({DATA}) => DATA.activeOffer;

export const getNearbyOffers = ({DATA}) => DATA.nearbyOffers;

export const getCityOffers = createSelector(
  [getCity, getOffers],
  (city, offers) => offers.filter((offer) => (
    offer.city.name === city.name
  )),
);

export const getSortedOffers = createSelector(
  [getSortType, getCityOffers],
  (sortType, offers) => {
    switch (sortType) {
      case SortTypes.POPULAR:
        return offers;
      case SortTypes.PRICE_HIGH_TO_LOW:
        return offers.slice().sort((a, b) => b.price - a.price);
      case SortTypes.PRICE_LOW_TO_HIGH:
        return offers.slice().sort((a, b) => a.price - b.price);
      case SortTypes.TOP_RATED:
        return offers.slice().sort((a, b) => b.rating - a.rating);
    }
  },
);

export const getFavorites = createSelector(
  [getCity, getOffers],
  (city, offers) => offers.filter((offer) => (
    offer.city.name === city.name && offer.isFavorite === true
  )),
);

export const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => reviews
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10),
);
