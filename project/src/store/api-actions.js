import {
  loadComments,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers,
  logout,
  redirectToRoute,
  requireAuthorization,
  setComment,
  setConnectionStatus,
  setFavorite,
  setRating,
  setUser
} from './action';

import {
  APIRoute,
  AuthorizationStatus,
  AppRoute,
  CONNECTION_STATUS,
  REQUEST_SOURCE
} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(setConnectionStatus({
    type: REQUEST_SOURCE.PAGE,
    status: CONNECTION_STATUS.WAIT,
  }));

  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(loadOffers(data));
      dispatch(setConnectionStatus({
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.SUCCESS,
      }));
    })
    .catch(() => {
      dispatch(setConnectionStatus({
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.ERROR,
      }));
    });
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setConnectionStatus({
    type: REQUEST_SOURCE.PAGE,
    status: CONNECTION_STATUS.WAIT,
  }));

  api.get(`${APIRoute.HOTELS}${id}`)
    .then(({data: offer}) => {
      dispatch(loadOffer(offer));
      dispatch(setConnectionStatus({
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.SUCCESS,
      }));

      return api.get(`${APIRoute.HOTELS}${id}/nearby`)
        .then(({data: nearby}) => {
          api.get(`${APIRoute.COMMENTS}${id}`)
            .then(({data: comments}) => {
              dispatch(loadNearby(nearby));
              dispatch(loadComments(comments));
            });
        });
    })
    .catch(() => dispatch(setConnectionStatus({
      type: REQUEST_SOURCE.PAGE,
      status: CONNECTION_STATUS.ERROR,
    })));
};

export const postComment = (id, comment) => (dispatch, _getState, api) => {
  dispatch(setConnectionStatus({
    type: REQUEST_SOURCE.COMMENT,
    status: CONNECTION_STATUS.WAIT,
  }));

  api.post(`${APIRoute.COMMENTS}${id}`, comment)
    .then(({data: comments}) => {
      dispatch(loadComments(comments));
      dispatch(setConnectionStatus({
        type: REQUEST_SOURCE.COMMENT,
        status: CONNECTION_STATUS.SUCCESS,
      }));
      dispatch(setComment(''));
      dispatch(setRating(0));
    })
    .catch(() => dispatch(setConnectionStatus({
      type: REQUEST_SOURCE.COMMENT,
      status: CONNECTION_STATUS.ERROR,
    })));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data: user}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUser(user));
      api.get(APIRoute.FAVORITES)
        .then(({data: favorites}) => {
          dispatch(loadFavorites(favorites));
        });
    })
    .catch(() => {})
);

export const login = ({login: email, password, activeOffer}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data: user}) => {
      api.get(APIRoute.FAVORITES)
        .then(({data: favorites}) => {
          dispatch(loadFavorites(favorites));
        });

      localStorage.setItem('token', user.token);
      dispatch(setUser(user));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));

      if (activeOffer) {
        dispatch(redirectToRoute(`${AppRoute.OFFER}/${activeOffer.id}`));
      } else {
        dispatch(redirectToRoute(AppRoute.ROOT));
      }
    })
    .catch(() => dispatch(setConnectionStatus({
      type: REQUEST_SOURCE.PAGE,
      status: CONNECTION_STATUS.ERROR,
    })))
);

export const signout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => {
      dispatch(logout());
      dispatch(loadFavorites([]));
    })
);

export const sendFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITES}${id}/${status}`)
    .then(({data}) => dispatch(setFavorite(data)))
    .catch(() => {
      dispatch(setConnectionStatus({
        type: REQUEST_SOURCE.FAVORITE,
        status: CONNECTION_STATUS.ERROR,
      }));
    });
};
