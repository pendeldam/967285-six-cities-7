import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {fetchOffersList} from '../../store/api-actions';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import CitiesContainer from '../cities-container/cities-container';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorPage from '../error-page/error-page';
import cityProp from '../cities-container/city.prop';
import offerProps from '../offer-card/offer-card.prop';
import {getCityOffers} from '../../store/selectors';
import {CONNECTION_STATUS} from '../../const';

function MainPage({isDataLoaded, city, offers, changeCity, loadOffers, activeOffer, setActiveOffer}) {
  useEffect(() => {
    if (!offers.length) {
      loadOffers();
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
      className={offers
        ? 'page page--gray page--main'
        : 'page page--gray page--main page__main--index-empty'}
    >
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            city={city}
            changeCity={changeCity}
          />
        </div>
        <CitiesContainer
          city={city}
          offers={offers}
          activeOffer={activeOffer}
          setActiveOffer={setActiveOffer}
        />
      </main>
    </div>
  );
}

MainPage.propTypes = {
  city: cityProp,
  changeCity: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerProps).isRequired,
  activeOffer: PropTypes.oneOfType([offerProps, PropTypes.object]),
  setActiveOffer: PropTypes.func.isRequired,
  loadOffers: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: getCityOffers(state),
  activeOffer: state.activeOffer,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  loadOffers() {
    dispatch(fetchOffersList());
  },
  setActiveOffer(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
