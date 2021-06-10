import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import FavoritesPage from '../favorites-page/favorites-page';
import ErrorPage from '../error-page/error-page';
import offerProps from '../offer-card/offer-card.prop';
import reviewProps from '../comment-item/comment-item.prop';
import {AppRoute} from '../../const';

function App({offers, reviews}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainPage offers={offers}/>
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesPage offers={offers}/>
        </Route>
        <Route path={`${AppRoute.OFFER}/:id`}>
          <OfferPage reviews={reviews}/>
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
  offers: PropTypes.arrayOf(offerProps).isRequired,
  reviews: PropTypes.arrayOf(reviewProps).isRequired,
};

export default App;
