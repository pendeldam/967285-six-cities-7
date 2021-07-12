import {createReducer} from '@reduxjs/toolkit';
import {setConnectionStatus, setComment, setRating} from '../action';
import {CONNECTION_STATUS} from '../../const';

const initialState = {
  isDataLoaded: CONNECTION_STATUS.WAIT,
  isCommentLoaded: CONNECTION_STATUS.SUCCESS,
  comment: '',
  rating: 0,
};

export const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(setConnectionStatus, (state, action) => {
      state[action.payload.type] = action.payload.status;
    })
    .addCase(setComment, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(setRating, (state, action) => {
      state.rating = action.payload;
    });
});
