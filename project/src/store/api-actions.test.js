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

  it('should make a correct API call to GET /login and GET /favorite/', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake:true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER,
          payload: [{fake: true}],
        });

        /* apiMock
          .onGet(APIRoute.FAVORITES)
          .reply(200, [{fake:true}]);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}],
        }); */
      });
  });

  it('should make a correct API call to GET /hotels/', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.PAGE,
            status: CONNECTION_STATUS.WAIT,
          },
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CONNECTION_STATUS,
          payload: {
            type: REQUEST_SOURCE.PAGE,
            status: CONNECTION_STATUS.SUCCESS,
          },
        });
      });
  });
});
