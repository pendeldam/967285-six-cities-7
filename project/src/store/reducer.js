import {ActionType} from './action';
import {DEFAULT_CITY} from '../const';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';

const initialState = {
  city: DEFAULT_CITY,
  offers,
  reviews,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload};
    default:
      return state;
  }
};
