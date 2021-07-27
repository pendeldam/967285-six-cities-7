import {appState} from './app-state';
import {ActionType} from '../action';
import {CONNECTION_STATUS, REQUEST_SOURCE} from '../../const';

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
      payload: {
        status: 404,
        data: {
          error: 'error',
        },
      },
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

  it('should update page connection status after successful response', () => {
    const state = {isDataLoaded: CONNECTION_STATUS.WAIT};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.SUCCESS,
      },
    };

    expect(appState(state, action))
      .toEqual({isDataLoaded: action.payload.status});
  });

  it('should update page connection status after error', () => {
    const state = {isDataLoaded: CONNECTION_STATUS.WAIT};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.ERROR,
      },
    };

    expect(appState(state, action))
      .toEqual({isDataLoaded: action.payload.status});
  });

  it('should update page connection status after request was sent', () => {
    const state = {isDataLoaded: CONNECTION_STATUS.SUCCESS};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.WAIT,
      },
    };

    expect(appState(state, action))
      .toEqual({isDataLoaded: action.payload.status});
  });

  it('should update comment connection status after successful response', () => {
    const state = {isCommentLoaded: CONNECTION_STATUS.WAIT};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.COMMENT,
        status: CONNECTION_STATUS.SUCCESS,
      },
    };

    expect(appState(state, action))
      .toEqual({isCommentLoaded: action.payload.status});
  });

  it('should update comment connection status after error', () => {
    const state = {isCommentLoaded: CONNECTION_STATUS.WAIT};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.COMMENT,
        status: CONNECTION_STATUS.ERROR,
      },
    };

    expect(appState(state, action))
      .toEqual({isCommentLoaded: action.payload.status});
  });

  it('should update comment connection status after request was sent', () => {
    const state = {isCommentLoaded: CONNECTION_STATUS.SUCCESS};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.COMMENT,
        status: CONNECTION_STATUS.WAIT,
      },
    };

    expect(appState(state, action))
      .toEqual({isCommentLoaded: action.payload.status});
  });

  it('should update favorite connection status after successful response', () => {
    const state = {isFavoriteLoaded: CONNECTION_STATUS.WAIT};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.FAVORITE,
        status: CONNECTION_STATUS.SUCCESS,
      },
    };

    expect(appState(state, action))
      .toEqual({isFavoriteLoaded: action.payload.status});
  });

  it('should update favorite connection status after error', () => {
    const state = {isFavoriteLoaded: CONNECTION_STATUS.WAIT};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.FAVORITE,
        status: CONNECTION_STATUS.ERROR,
      },
    };

    expect(appState(state, action))
      .toEqual({isFavoriteLoaded: action.payload.status});
  });

  it('should update favorite connection status after request was sent', () => {
    const state = {isFavoriteLoaded: CONNECTION_STATUS.SUCCESS};

    const action = {
      type: ActionType.CONNECTION_STATUS,
      payload: {
        type: REQUEST_SOURCE.FAVORITE,
        status: CONNECTION_STATUS.WAIT,
      },
    };

    expect(appState(state, action))
      .toEqual({isFavoriteLoaded: action.payload.status});
  });
});
