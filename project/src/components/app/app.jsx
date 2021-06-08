import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import FavoritesPage from '../favorites-page/favorites-page';
import ErrorPage from '../error-page/error-page';
import {AppRoute} from '../../const';

function App({offersCount}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainPage offersCount={offersCount}/>
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesPage/>
        </Route>
        <Route path={`${AppRoute.OFFER}/:id`}>
          <OfferPage/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
