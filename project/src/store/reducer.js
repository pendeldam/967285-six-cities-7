import {ActionType} from './action';
import {DEFAULT_CITY} from '../const';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {SortTypes} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortTypes.POPULAR,
  activeOffer: null,
  offers,
  reviews,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload};
    case ActionType.SET_SORT_TYPE:
      return {...state, sortType: action.payload};
    case ActionType.SET_ACTIVE_OFFER:
      return {...state, activeOffer: action.payload};
    default:
      return state;
  }
};
