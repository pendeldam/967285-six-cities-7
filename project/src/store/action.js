import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CONNECTION_STATUS: 'data/CONNECTION_STATUS',
  LOAD_COMMENTS: 'data/LOAD_COMMENTS',
  LOAD_FAVORITES: 'LOAD_FAVORITES',
  LOAD_OFFER: 'data/LOAD_OFFER',
  LOAD_OFFERS: 'data/LOAD_OFFERS',
  LOAD_NEARBY: 'data/LOAD_NEARBY',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'data/REDIRECT_TO_ROUTE',
  REQUIRED_AUTHORIZATION: 'user/REQUIRED_AUTHORIZATION',
  SET_ACTIVE_OFFER: 'data/SET_ACTIVE_OFFER',
  SET_CITY: 'data/SET_CITY',
  SET_COMMENT: 'data/SET_COMMENT',
  SET_FAVORITE: 'SET_FAVORITE',
  SET_RATING: 'data/SET_RATING',
  SET_SORT_TYPE: 'data/SET_SORT_TYPE',
  SET_USER: 'user/SET_USER',
};

export const loadComments = createAction(
  ActionType.LOAD_COMMENTS,
  (comments) => ({payload: comments}),
);

export const loadFavorites = createAction(
  ActionType.LOAD_FAVORITES,
  (offers) => ({payload: offers}),
);

export const loadOffer = createAction(
  ActionType.LOAD_OFFER,
  (offer) => ({payload: offer}),
);

export const loadOffers = createAction(
  ActionType.LOAD_OFFERS,
  (offers) => ({payload: offers}),
);

export const loadNearby = createAction(
  ActionType.LOAD_NEARBY,
  (offers) => ({payload: offers}),
);

export const logout = createAction(
  ActionType.LOGOUT,
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);

export const requireAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  (status) => ({payload: status}),
);

export const setActiveOffer = createAction(
  ActionType.SET_ACTIVE_OFFER,
  (offer) => ({payload: offer}),
);

export const setCity = createAction(
  ActionType.SET_CITY,
  (city) => ({payload: city}),
);

export const setConnectionStatus = createAction(
  ActionType.CONNECTION_STATUS,
  (status) => ({payload: status}),
);

export const setComment = createAction(
  ActionType.SET_COMMENT,
  (comment) => ({payload: comment}),
);

export const setFavorite = createAction(
  ActionType.SET_FAVORITE,
  (offer) => ({payload: offer}),
);

export const setRating = createAction(
  ActionType.SET_RATING,
  (rating) => ({payload: rating}),
);

export const setSortType = createAction(
  ActionType.SET_SORT_TYPE,
  (type) => ({payload: type}),
);

export const setUser = createAction(
  ActionType.SET_USER,
  (user) => ({payload: user}),
);
