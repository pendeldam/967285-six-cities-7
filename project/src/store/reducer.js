import {ActionType} from './action';
import {DEFAULT_CITY} from '../const';
import {SortTypes, AuthorizationStatus, CONNECTION_STATUS} from '../const';
import {adapt2Client} from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: CONNECTION_STATUS.WAIT,
  isCommentLoaded: CONNECTION_STATUS.SUCCESS,
  activeOffer: null,
  offers: [],
  offer: null,
  nearbyOffers: [],
  favorites: [],
  reviews: [],
  comment: '',
  rating: 0,
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
    case ActionType.CONNECTION_STATUS:
      return {
        ...state,
        [action.payload.type]: action.payload.status,
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
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: adapt2Client(action.payload),
        activeOffer: adapt2Client(action.payload),
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
    case ActionType.SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case ActionType.SET_RATING:
      return {
        ...state,
        rating: action.payload,
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
