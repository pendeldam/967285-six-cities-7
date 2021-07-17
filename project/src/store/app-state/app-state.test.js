import {appState} from './app-state';
import {ActionType} from '../action';
import {CONNECTION_STATUS} from '../../const';

const error = {
  data: {
    error: 'error',
  },
  status: 404,
};

const initialState = {
  isCommentLoaded: CONNECTION_STATUS.SUCCESS,
  isDataLoaded: CONNECTION_STATUS.WAIT,
  isFavoriteLoaded: CONNECTION_STATUS.SUCCESS,
  error: {
    code: null,
    text: '',
  },
};

describe('Reducer: appState', () => {
  it('with no parameters should return initial state', () => {
    expect(appState(undefined, {}))
      .toEqual(initialState);
  });

  it('should update error info', () => {
    const action = {
      type: ActionType.GET_ERROR_INFO,
      payload: error,
    };

    expect(appState(initialState, action))
      .toEqual({
        ...initialState,
        error: {
          code: action.payload.status,
          text:action.payload.data.error,
        },
      });
  });
});
