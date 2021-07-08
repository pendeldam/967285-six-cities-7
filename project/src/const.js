export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  HOTELS: '/hotels/',
  FAVORITES: '/favorite/',
  COMMENTS: '/comments/',
};

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/hotels',
};

export const CONNECTION_STATUS = {
  WAIT: 'WAIT',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const REQUEST_SOURCE = {
  PAGE: 'isDataLoaded',
  COMMENT: 'isCommentLoaded',
  FAVORITE: 'isFavoriteLoaded',
};

export const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const HttpCode = {
  UNAUTHORIZED: 401,
};

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 12,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 12,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12,
    },
  },
];

export const DEFAULT_CITY = CITIES[0];

export const RatingPercent = {
  1: '20%',
  2: '40%',
  3: '60%',
  4: '80%',
  5: '100%',
};

export const RatingWords = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

export const OfferTypes = {
  apartment: 'Apartment',
  room: 'Private Room',
  hotel: 'Hotel',
  house: 'House',
};

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated firs',
};

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_ACTIVE = '../img/pin-active.svg';

export {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT};
