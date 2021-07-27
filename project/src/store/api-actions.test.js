import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  checkAuth,
  login,
  signout,
  fetchOffer,
  fetchOffersList,
  postComment,
  sendFavorite
} from './api-actions';
import {
  APIRoute,
  AuthorizationStatus,
  AppRoute,
  CONNECTION_STATUS,
  REQUEST_SOURCE
} from '../const';

let api = null;

describe('async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake:true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        apiMock.onGet(APIRoute.FAVORITES).reply(() => (
          Promise.resolve(() => {
            expect(dispatch).toBeCalledTimes(3);

            expect(dispatch).nthCalledWith(1, {
              type: ActionType.LOAD_FAVORITES,
              payload: [{fake: true}],
            });

            expect(dispatch).nthCalledWith(2, {
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: AuthorizationStatus.AUTH,
            });

            expect(dispatch).nthCalledWith(3, {
              type: ActionType.SET_USER,
              payload: [{fake: true}],
            });
          })
        ));
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    Storage.prototype.setItem = jest.fn();

    const fakeUser = {
      email: 'user@mail.com',
      password: 'qwerty',
    };

    const fakeOffer = {id: 1};

    const redirect = fakeOffer
      ? {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: `${AppRoute.OFFER}/${fakeOffer.id}`,
      }
      : {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: AppRoute.ROOT,
      };

    const loginLoader = login({fakeUser, fakeOffer});

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        apiMock.onGet(APIRoute.FAVORITES).reply(() =>
          Promise.resolve(() => {
            expect(dispatch).toBeCalledTimes(4);

            expect(dispatch).nthCalledWith(1, {
              type: ActionType.LOAD_FAVORITES,
              payload: [{fake: true}],
            });

            expect(dispatch).nthCalledWith(2, {
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: AuthorizationStatus.AUTH,
            });

            expect(dispatch).nthCalledWith(3, {
              type: ActionType.SET_USER,
              payload: [{fake: true}],
            });

            expect(dispatch).nthCalledWith(4, redirect);

            expect(Storage.prototype.setItem).toBeCalledTimes(1);
            expect(Storage.prototype.setItem).nthCalledWith(1, {token: 'token'});
          }),
        );
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = signout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);

        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.LOAD_FAVORITES,
          payload: [],
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a correct API call to GET /hotels/', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [{fake:true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(3);

        expect(dispatch).nthCalledWith(1, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.PAGE,
            status: CONNECTION_STATUS.WAIT,
          },
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });

        expect(dispatch).nthCalledWith(3, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.PAGE,
            status: CONNECTION_STATUS.SUCCESS,
          },
        });
      });
  });

  it('should make a correct API call to GET /hotels/ with offer id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;

    const offerLoader = fetchOffer(fakeId);

    apiMock
      .onGet(`${APIRoute.HOTELS}${fakeId}`)
      .reply(200, [{fake: true}]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(4);

        expect(dispatch).nthCalledWith(1, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.PAGE,
            status: CONNECTION_STATUS.WAIT,
          },
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.LOAD_OFFER,
          payload: [{fake: true}],
        });

        expect(dispatch).nthCalledWith(3, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.PAGE,
            status: CONNECTION_STATUS.SUCCESS,
          },
        });

        apiMock.onGet(`${APIRoute.HOTELS}${fakeId}/nearby`).reply(() => (
          Promise.resolve(() => (
            apiMock.onGet(`${APIRoute.COMMENTS}${fakeId}`).reply(() => (
              Promise.resolve(() => {
                expect(dispatch).toBeCalledTimes(2);

                expect(dispatch).nthCalledWith(1, {
                  type: ActionType.LOAD_NEARBY,
                  payload: [{fake: true}],
                });

                expect(dispatch).nthCalledWith(2, {
                  type: ActionType.LOAD_COMMENTS,
                  payload: [{fake: true}],
                });
              })
            ))
          ))
        ));
      });
  });

  it('should make a correct API call to POST /comments/', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;
    const fakeComment = {
      comment: 'text',
      rating: 5,
    };

    const commentLoader = postComment(fakeId, fakeComment);

    apiMock
      .onPost(`${APIRoute.COMMENTS}${fakeId}`, fakeComment)
      .reply(200, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(5);

        expect(dispatch).nthCalledWith(1, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.COMMENT,
            status: CONNECTION_STATUS.WAIT,
          },
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });

        expect(dispatch).nthCalledWith(3, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.COMMENT,
            status: CONNECTION_STATUS.SUCCESS,
          },
        });

        expect(dispatch).nthCalledWith(4, {
          type: ActionType.SET_COMMENT,
          payload: '',
        });

        expect(dispatch).nthCalledWith(5, {
          type: ActionType.SET_RATING,
          payload: 0,
        });
      });
  });

  it('should make a correct API call to POST /favorite/', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;
    const fakeStatus = 1;

    const favoriteLoader = sendFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(`${APIRoute.FAVORITES}${fakeId}/${fakeStatus}`)
      .reply(200, {fake: true});

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);

        expect(dispatch).nthCalledWith(1, {
          type: ActionType.SET_FAVORITE,
          payload: {fake: true},
        });
      });
  });
});
