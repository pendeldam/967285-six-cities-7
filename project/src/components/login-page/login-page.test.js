import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigates to "login" url', () => {
    const history = createMemoryHistory();

    const createFakeStore = configureStore({});
    const store = createFakeStore({
      STATE: {isDataLoaded: 'WAIT'},
      DATA: {city: 'Paris'},
      USER: {authorizationStatus: 'NO_AUTH'},
    });

    const fakeComponent = (
      <Provider store={store}>
        <Router history={history}>
          <LoginPage/>
        </Router>
      </Provider>
    );

    history.push('/login');
    render(fakeComponent);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'keks@htmlacademy.ru');
    userEvent.type(screen.getByTestId('password'), '123');

    expect(screen.getByDisplayValue(/keks@htmlacademy.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123/i)).toBeInTheDocument();
  });
});
