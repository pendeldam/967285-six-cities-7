export const ActionType = {
  CHANGE_CITY: 'data/CHANGE_CITY',
  CONNECTION_STATUS: 'state/CONNECTION_STATUS',
  LOAD_COMMENTS: 'data/LOAD_COMMENTS',
  LOAD_NEARBY_OFFERS: 'data/LOAD_NEARBY_OFFERS',
  LOAD_OFFER: 'data/LOAD_OFFER',
  LOAD_OFFERS: 'data/LOAD_OFFERS',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'data/REDIRECT_TO_ROUTE',
  REQUIRED_AUTHORIZATION: 'user/REQUIRED_AUTHORIZATION',
  SET_ACTIVE_OFFER: 'data/SET_ACTIVE_OFFER',
  SET_COMMENT: 'data/SET_COMMENT',
  SET_RATING: 'data/SET_RATING',
  SET_SORT_TYPE: 'data/SET_SORT_TYPE',
  SET_USER: 'user/SET_USER',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setComment: (comment) => ({
    type: ActionType.SET_COMMENT,
    payload: comment,
  }),
  setRating: (rating) => ({
    type: ActionType.SET_RATING,
    payload: rating,
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),
  setConnectionStatus: (status) => ({
    type: ActionType.CONNECTION_STATUS,
    payload: status,
  }),
  setSortType: (type) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: type,
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
};
