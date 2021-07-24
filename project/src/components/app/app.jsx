import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/app-user/selectors';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import FavoritesPage from '../favorites-page/favorites-page';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';
import {isCheckedAuth} from '../../utils';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return <LoadingScreen/>;
  }

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPage/>
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <LoginPage/>
      </Route>
      <PrivateRoute exact path={AppRoute.FAVORITES}
        render={() => <FavoritesPage/>}
      />
      <Route path={`${AppRoute.OFFER}/:id`}>
        <OfferPage/>
      </Route>
      <Route>
        <ErrorPage/>
      </Route>
    </Switch>
  );
}

export default App;
