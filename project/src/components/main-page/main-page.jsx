import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import CitiesContainer from '../cities-container/cities-container';
import cityProp from '../cities-container/city.prop';
import offerProps from '../offer-card/offer-card.prop';
import {getCityOffers} from '../../store/selectors';

function MainPage({city, offers, changeCity}) {
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
        <CitiesContainer city={city} offers={offers}/>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  city: cityProp,
  changeCity: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerProps).isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: getCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
