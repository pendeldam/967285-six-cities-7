export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};
