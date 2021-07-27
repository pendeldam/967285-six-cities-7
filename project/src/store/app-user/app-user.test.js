import {appUser} from './app-user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  avatarUrl: '',
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  email: '',
  id: null,
  isPro: false,
  name: '',
  token: null,
};

describe('Reducer: appUser', () => {
  it('with no parameters should return initial state', () => {
    expect(appUser(undefined, {}))
      .toEqual(initialState);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};

    const action = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(appUser(state, action))
      .toEqual({
        authorizationStatus: action.payload,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH};

    const action = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(appUser(state, action))
      .toEqual({
        authorizationStatus: action.payload,
      });
  });

  it('should update user info after successful logon', () => {
    const action = {
      type: ActionType.SET_USER,
      payload: {
        avatarUrl: 'url',
        email: 'your@email.com',
        id: 1,
        isPro: true,
        name: 'your_name',
        token: 'your_token',
      },
    };

    expect(appUser(initialState, action))
      .toEqual({
        ...initialState,
        avatarUrl: action.payload.avatarUrl,
        email: action.payload.email,
        id: action.payload.id,
        isPro: action.payload.isPro,
        name: action.payload.name,
        token: action.payload.token,
      });
  });

  it('should update user info after successful logout', () => {
    const action = {
      type: ActionType.LOGOUT,
    };

    expect(appUser(initialState, action))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });
});
