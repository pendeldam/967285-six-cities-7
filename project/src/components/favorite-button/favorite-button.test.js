import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {getByTestId, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import FavoriteButton from './favorite-button';

let store;
let history;
let mockStore;
let fakeId;
let fakeFavorites;
let fakeStyles;

describe('Component: FavoriteButton', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();

    fakeId = 1;

    fakeStyles = {
      bookmark: 'bookmark-style',
      width: 10,
      height: 10,
    };

    fakeFavorites = {
      favorites: [
        {id: 1, isFavorite: true},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: false},
      ],
    };
  });

  it('should render correctly', () => {
    store = mockStore({
      STATE: {
        isFavoriteLoaded: true,
      },
      DATA: {
        favorites: [fakeFavorites],
      },
      USER: {
        authorizationStatus: 'AUTH',
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton
            id={fakeId}
            styles={fakeStyles}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
  });
});
