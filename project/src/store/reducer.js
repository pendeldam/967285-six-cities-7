import {ActionType} from './action';
import {DEFAULT_CITY} from '../const';
import {reviews} from '../mocks/reviews';
import {SortTypes, AuthorizationStatus} from '../const';
import {adapt2Client} from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  activeOffer: null,
  offers: [],
  reviews,
  email: '',
  name: '',
  id: null,
  avatarUrl: '',
  isPro: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload.map(adapt2Client),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        ...adapt2Client(action.payload),
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        email: '',
        name: '',
        id: null,
        avatarUrl: '',
        isPro: false,
      };
    default:
      return state;
  }
};
