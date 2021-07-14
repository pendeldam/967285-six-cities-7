import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCity, getOffers} from '../../store/app-data/selectors';
import {getIsDataLoaded} from '../../store/app-state/selectors';
import {fetchOffersList} from '../../store/api-actions';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import CitiesContainer from '../cities-container/cities-container';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorPage from '../error-page/error-page';
import {CONNECTION_STATUS} from '../../const';

function MainPage() {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);
  const city = useSelector(getCity);
  const offers = useSelector(getOffers);

  useEffect(() => {
    if (!offers.length) {
      dispatch(fetchOffersList());
    }
  }, []);

  if (isDataLoaded === CONNECTION_STATUS.ERROR) {
    return <ErrorPage/>;
  }

  if (isDataLoaded === CONNECTION_STATUS.WAIT) {
    return <LoadingScreen/>;
  }

  return (
    <div
      className={offers.length
        ? 'page page--gray page--main'
        : 'page page--gray page--main page__main--index-empty'}
    >
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={city}/>
        </div>
        <CitiesContainer city={city}/>
      </main>
    </div>
  );
}

export default MainPage;
