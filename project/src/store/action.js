export const ActionType = {
  CONNECTION_STATUS: 'state/CONNECTION_STATUS',
  LOAD_COMMENTS: 'data/LOAD_COMMENTS',
  LOAD_NEARBY_OFFERS: 'data/LOAD_NEARBY_OFFERS',
  LOAD_OFFER: 'data/LOAD_OFFER',
  LOAD_OFFERS: 'data/LOAD_OFFERS',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'data/REDIRECT_TO_ROUTE',
  REQUIRED_AUTHORIZATION: 'user/REQUIRED_AUTHORIZATION',
  SET_ACTIVE_OFFER: 'data/SET_ACTIVE_OFFER',
  SET_CITY: 'data/SET_CITY',
  SET_COMMENT: 'data/SET_COMMENT',
  SET_RATING: 'data/SET_RATING',
  SET_SORT_TYPE: 'data/SET_SORT_TYPE',
  SET_USER: 'user/SET_USER',
};

export const setCity = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadNearbyOffers = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});
export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setComment = (comment) => ({
  type: ActionType.SET_COMMENT,
  payload: comment,
});

export const setRating = (rating) => ({
  type: ActionType.SET_RATING,
  payload: rating,
});

export const setActiveOffer = (offer) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: offer,
});

export const setConnectionStatus = (status) => ({
  type: ActionType.CONNECTION_STATUS,
  payload: status,
});

export const setSortType = (type) => ({
  type: ActionType.SET_SORT_TYPE,
  payload: type,
});

export const setUser = (user) => ({
  type: ActionType.SET_USER,
  payload: user,
});
