export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
};

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longtitude: 2.351499,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longtitude: 6.959974,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longtitude: 4.351697,
      zoom: 12,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longtitude: 4.897976,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longtitude: 10.000654,
      zoom: 12,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longtitude: 6.776314,
      zoom: 12,
    },
  },
];

export const DEFAULT_CITY = CITIES[0];

export const Rating = {
  1: '20%',
  2: '40%',
  3: '60%',
  4: '80%',
  5: '100%',
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
