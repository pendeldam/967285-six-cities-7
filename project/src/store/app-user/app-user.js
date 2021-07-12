import {createReducer} from '@reduxjs/toolkit';
import {logout, setUser, requireAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';
import {adapt2Client} from '../../utils';

const initialState = {
  avatarUrl: '',
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  email: '',
  id: null,
  isPro: false,
  name: '',
  token: null,
};

export const appUser = createReducer(initialState, (builder) => {
  builder
    .addCase(logout, (state) => {
      state.avatarUrl = '';
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.email = '';
      state.id = null;
      state.isPro = false;
      state.name = '';
      state.token = null;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => (
      {...state, ...adapt2Client(action.payload)}
    ));
});
