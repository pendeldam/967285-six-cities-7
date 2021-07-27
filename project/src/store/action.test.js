import {
  ActionType,
  logout,
  redirectToRoute,
  requireAuthorization,
  setComment,
  setConnectionStatus,
  setRating,
  setSortType
} from './action';

describe('Actions', () => {
  it('action creator for getting route redirect url', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'url',
    };

    expect(redirectToRoute('url'))
      .toEqual(expectedAction);
  });

  it('action creator for setting user authorization status', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'status',
    };

    expect(requireAuthorization('status'))
      .toEqual(expectedAction);
  });

  it('action creator for setting user comment', () => {
    const expectedAction = {
      type: ActionType.SET_COMMENT,
      payload: 'comment',
    };

    expect(setComment('comment'))
      .toEqual(expectedAction);
  });

  it('action creator for setting connection status', () => {
    const expectedAction = {
      type: ActionType.CONNECTION_STATUS,
      payload: 'status',
    };

    expect(setConnectionStatus('status'))
      .toEqual(expectedAction);
  });

  it('action creator for setting user comment rating', () => {
    const expectedAction = {
      type: ActionType.SET_RATING,
      payload: 5,
    };

    expect(setRating(5))
      .toEqual(expectedAction);
  });

  it('action creator for setting sort type', () => {
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: 'type',
    };

    expect(setSortType('type'))
      .toEqual(expectedAction);
  });

  it('action creator for user logout', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout())
      .toEqual(expectedAction);
  });
});
