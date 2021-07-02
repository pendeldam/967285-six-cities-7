import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
// import OfferPage from '../offer-page/offer-page';
import FavoritesPage from '../favorites-page/favorites-page';
import ErrorPage from '../error-page/error-page';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';
import {isCheckedAuth} from '../../utils';

function App({authorizationStatus, isDataLoaded}) {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage/>
        </Route>
        <Route path={`${AppRoute.OFFER}/:id`}>
          {/* <OfferPage/> */}
        </Route>
        <Route exact path={AppRoute.LOGIN}>
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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({authorizationStatus, isDataLoaded}) => ({
  authorizationStatus,
  isDataLoaded,
});

export {App};
export default connect(mapStateToProps)(App);
