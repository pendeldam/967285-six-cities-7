import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import App from './app';
import {AppRoute, CITIES} from '../../const';

let history = null;
let store = null;
let fakeApp = null;

describe('App routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      STATE: {
        isDataLoaded: 'SUCCESS',
        error: {
          code: null,
          text: '',
        },
      },
      DATA: {
        city: CITIES[0],
      },
      USER: {authorizationStatus: 'NO_AUTH'},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('should render "LoginPage" when user navigates to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "ErrorPage" when user navigates to non-existent route', () => {
    history.push('/non-existent route');
    render(fakeApp);

    expect(screen.getByText(/Back to Main page/i)).toBeInTheDocument();
    expect(screen.getByTestId('error-heading')).toBeInTheDocument();
  });
});
