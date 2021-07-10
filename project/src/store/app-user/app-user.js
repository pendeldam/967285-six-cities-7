import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';
import {adapt2Client} from '../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  email: '',
  name: '',
  id: null,
  avatarUrl: '',
  isPro: false,
};

export const appUser = (state = initialState, action) => {
  switch (action.type) {
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
