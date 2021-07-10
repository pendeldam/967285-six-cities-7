import {ActionType} from '../action';
import {adapt2Client} from '../../utils';
import {DEFAULT_CITY, SortTypes} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortTypes.POPULAR,
  offer: null,
  offers: [],
  activeOffer: null,
  nearbyOffers: [],
  favorites: [],
  reviews: [],
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
        offer: adapt2Client(action.payload),
        activeOffer: adapt2Client(action.payload),
        city: action.payload.city,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload.map(adapt2Client),
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload.map(adapt2Client),
      };
    default:
      return state;
  }
};
