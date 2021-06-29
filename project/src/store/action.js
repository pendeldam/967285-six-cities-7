export const ActionType = {
  CHANGE_CITY: 'data/CHANGE_CITY',
  SET_SORT_TYPE: 'data/SET_SORT_TYPE',
  SET_ACTIVE_OFFER: 'data/SET_ACTIVE_OFFER',
  LOAD_OFFERS: 'data/LOAD_OFFERS',
  REQUIRED_AUTHORIZATION: 'user/REQUIRED_AUTHORIZATION',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setSortType: (type) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: type,
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
