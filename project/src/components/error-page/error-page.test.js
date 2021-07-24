import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import ErrorPage from './error-page';

describe('Component: ErrorPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const createFakeStore = configureStore({});
    const store = createFakeStore({
      STATE: {
        error: {
          code: null,
          text: '',
        },
      },
      USER: {
        email: 'user@mail.com',
        avatarUrl: 'user.img',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ErrorPage/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Back to Main page/i)).toBeInTheDocument();
    expect(screen.getByTestId('error-heading')).toBeInTheDocument();
  });
});
