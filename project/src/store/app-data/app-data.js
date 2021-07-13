import {createReducer} from '@reduxjs/toolkit';
import {loadComments, loadFavorites, loadOffer, loadOffers, loadNearby, setActiveOffer, setCity, setSortType, setConnectionStatus, setComment, setRating, setFavorite} from '../action';
import {adapt2Client} from '../../utils';
import {CONNECTION_STATUS, DEFAULT_CITY, SortTypes} from '../../const';

const initialState = {
  activeOffer: null,
  city: DEFAULT_CITY,
  comment: '',
  favorites: [],
  isCommentLoaded: CONNECTION_STATUS.SUCCESS,
  isDataLoaded: CONNECTION_STATUS.WAIT,
  isFavoriteLoaded: CONNECTION_STATUS.SUCCESS,
  nearbyOffers: [],
  offer: null,
  offers: [],
  rating: 0,
  reviews: [],
  sortType: SortTypes.POPULAR,
};

export const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload.map(adapt2Client);
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload.map(adapt2Client);
    })
    .addCase(loadOffer, (state, action) => {
      state.activeOffer = adapt2Client(action.payload);
      state.city = action.payload.city;
      state.offer = adapt2Client(action.payload);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.map(adapt2Client);
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload.map(adapt2Client);
    })
    .addCase(setConnectionStatus, (state, action) => {
      state[action.payload.type] = action.payload.status;
    })
    .addCase(setComment, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(setFavorite, (state, action) => {
      const update = adapt2Client(action.payload).isFavorite
        ? [...state.favorites, adapt2Client(action.payload)]
        : [...state.favorites].filter((offer) => offer.id !== action.payload.id);

      state.favorites = update;
    })
    .addCase(setRating, (state, action) => {
      state.rating = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});
