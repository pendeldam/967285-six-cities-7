export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SET_ACTIVE_OFFER: 'SET_ACTIVE_OFFER',
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
};
