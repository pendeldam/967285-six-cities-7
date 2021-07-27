import {createReducer} from '@reduxjs/toolkit';
import {getErrorInfo, setConnectionStatus} from '../action';
import {CONNECTION_STATUS} from '../../const';

const initialState = {
  isCommentLoaded: CONNECTION_STATUS.SUCCESS,
  isDataLoaded: CONNECTION_STATUS.WAIT,
  isFavoriteLoaded: CONNECTION_STATUS.SUCCESS,
  error: {
    code: null,
    text: '',
  },
};

export const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(getErrorInfo, (state, action) => {
      state.error = {
        code: action.payload.status,
        text: action.payload.data.error,
      };
    })
    .addCase(setConnectionStatus, (state, action) => {
      state[action.payload.type] = action.payload.status;
    });
});

