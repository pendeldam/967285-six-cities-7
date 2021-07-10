import {ActionType} from '../action';
import {CONNECTION_STATUS} from '../../const';

const initialState = {
  isDataLoaded: CONNECTION_STATUS.WAIT,
  isCommentLoaded: CONNECTION_STATUS.SUCCESS,
  comment: '',
  rating: 0,
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CONNECTION_STATUS:
      return {
        ...state,
        [action.payload.type]: action.payload.status,
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
    default:
      return state;
  }
};
