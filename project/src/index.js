import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {requireAuthorization, getErrorInfo} from './store/action';
import {checkAuth} from './store/api-actions';
import rootReducer from './store/root-reducer';
import {redirect} from './store/middlewares/redirect';
import {createAPI} from './services/api';
import App from './components/app/app';
import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
  (error) => store.dispatch(getErrorInfo(error)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
