import {ActionType} from '../action';
import {adapt2Client} from '../../utils';
import {DEFAULT_CITY, SortTypes} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortTypes.POPULAR,
  offers: [],
  activeOffer: null,
  favorites: [],
  offer: {
    main: null,
    nearbyOffers: [],
    reviews: [],
  },
};

export const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload.map(adapt2Client),
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        activeOffer: adapt2Client(action.payload.main),
        city: action.payload.main.city,
        offer: {
          main: adapt2Client(action.payload.main),
          nearbyOffers: action.payload.nearby.map(adapt2Client),
          reviews: action.payload.reviews.map(adapt2Client),
        },
      };
    default:
      return state;
  }
};
