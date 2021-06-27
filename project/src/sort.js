import {SortTypes} from './const';

export const sortOffers = (type, offers) => {
  switch (type) {
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortTypes.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortTypes.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
};
