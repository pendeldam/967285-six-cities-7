import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute, CONNECTION_STATUS, REQUEST_SOURCE} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setConnectionStatus({
    type: REQUEST_SOURCE.PAGE,
    status: CONNECTION_STATUS.WAIT,
  }));

  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(data));
      dispatch(ActionCreator.setConnectionStatus({
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.SUCCESS,
      }));
    })
    .catch(() => dispatch(ActionCreator.setConnectionStatus({
      type: REQUEST_SOURCE.PAGE,
      status: CONNECTION_STATUS.ERROR,
    })));
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setConnectionStatus({
    type: REQUEST_SOURCE.PAGE,
    status: CONNECTION_STATUS.WAIT,
  }));

  api.get(`${APIRoute.HOTELS}${id}`)
    .then(({data: offer}) => {
      dispatch(ActionCreator.loadOffer(offer));
      dispatch(ActionCreator.setConnectionStatus({
        type: REQUEST_SOURCE.PAGE,
        status: CONNECTION_STATUS.SUCCESS,
      }));
      return api.get(`${APIRoute.HOTELS}${id}/nearby`)
        .then(({data: nearby}) => {
          dispatch(ActionCreator.loadNearbyOffers(nearby));
          return api.get(`${APIRoute.COMMENTS}${id}`)
            .then(({data: comments}) => {
              dispatch(ActionCreator.loadComments(comments));
            });
        });
    })
    .catch(() => dispatch(ActionCreator.setConnectionStatus({
      type: REQUEST_SOURCE.PAGE,
      status: CONNECTION_STATUS.ERROR,
    })));
};

export const postComment = (id, comment) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setConnectionStatus({
    type: REQUEST_SOURCE.COMMENT,
    status: CONNECTION_STATUS.WAIT,
  }));

  api.post(`${APIRoute.COMMENTS}${id}`, comment)
    .then(({data: comments}) => {
      dispatch(ActionCreator.loadComments(comments));
      dispatch(ActionCreator.setConnectionStatus({
        type: REQUEST_SOURCE.COMMENT,
        status: CONNECTION_STATUS.SUCCESS,
      }));
      dispatch(ActionCreator.setComment(''));
      dispatch(ActionCreator.setRating(0));
    })
    .catch(() => dispatch(ActionCreator.setConnectionStatus({
      type: REQUEST_SOURCE.COMMENT,
      status: CONNECTION_STATUS.ERROR,
    })));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password, activeOffer}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setUser(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));

      if (activeOffer) {
        dispatch(ActionCreator.redirectToRoute(`${AppRoute.OFFER}/${activeOffer.id}`));
      } else {
        dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
      }
    })
);
export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
