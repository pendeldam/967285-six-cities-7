import {appData} from './app-data';
import {ActionType} from '../action';
import {DEFAULT_CITY, SortTypes} from '../../const';

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const comment = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/1.png',
    id: 4,
    isPro: false,
    name: 'Max',
  }
};

const initialState = {
  activeOffer: null,
  city: DEFAULT_CITY,
  comment: '',
  favorites: [],
  nearbyOffers: [],
  offer: null,
  offers: [],
  rating: 0,
  reviews: [],
  sortType: SortTypes.POPULAR,
};

describe('Reducer: appData', () => {
  it('with no parameters should return initial state', () => {
    expect(appData(undefined, {}))
      .toEqual(initialState);
  });

  it('should update city', () => {
    const action = {
      type: ActionType.SET_CITY,
      payload: offer.city,
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        city: offer.city,
      });
  });

  it('should update comment', () => {
    const action = {
      type: ActionType.SET_COMMENT,
      payload: 'comment',
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        comment: 'comment',
      });
  });

  it('should update comment rating', () => {
    const action = {
      type: ActionType.SET_RATING,
      payload: 5,
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        rating: 5,
      });
  });

  it('should update sort type', () => {
    const action = {
      type: ActionType.SET_SORT_TYPE,
      payload: 'type',
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        sortType: 'type',
      });
  });

  it('should update active offer', () => {
    const action = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: offer,
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        activeOffer: offer,
      });
  });

  it('should update offer with loaded offer', () => {
    const action = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        activeOffer: offer,
        offer: offer,
        city: offer.city,
      });
  });

  it('should update offers with loaded offers', () => {
    const action = {
      type: ActionType.LOAD_OFFERS,
      payload: [offer, offer, offer],
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        offers: [offer, offer, offer],
      });
  });

  it('should update nearby offers with loaded nearby offers', () => {
    const action = {
      type: ActionType.LOAD_NEARBY,
      payload: [offer, offer, offer],
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        nearbyOffers: [offer, offer, offer],
      });
  });

  it('should update comments with loaded comments', () => {
    const action = {
      type: ActionType.LOAD_COMMENTS,
      payload: [comment, comment, comment],
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        reviews: [comment, comment, comment],
      });
  });

  it('should update favorites with loaded favorites', () => {
    const action = {
      type: ActionType.LOAD_FAVORITES,
      payload: [offer, offer, offer],
    };

    expect(appData(initialState, action))
      .toEqual({
        ...initialState,
        favorites: [offer, offer, offer],
      });
  });
});
