export const ActionType = {
  CHANGE_CITY: 'data/CHANGE_CITY',
  LOAD_OFFERS: 'data/LOAD_OFFERS',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'data/REDIRECT_TO_ROUTE',
  REQUIRED_AUTHORIZATION: 'user/REQUIRED_AUTHORIZATION',
  SET_ACTIVE_OFFER: 'data/SET_ACTIVE_OFFER',
  SET_SORT_TYPE: 'data/SET_SORT_TYPE',
  SET_USER: 'user/SET_USER',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
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
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
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
