export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
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
};
