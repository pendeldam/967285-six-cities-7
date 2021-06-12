import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';
import OffersList from '../offer-list/offer-list';
import FavoriteOfferCard from '../offer-card/favorite-offer-card';
import offerProps from '../offer-card/offer-card.prop';
import {AppRoute} from '../../const';

function FavoritesPage({offers}) {
  return (
    <div className={!offers.length ? 'page page--favorites-empty' : 'page'}>
      <Header/>
      <main className={!offers.length ? 'page__main page__main--favorites page__main--favorites-empty' : 'page__main page__main--favorites'}>
        <div className="page__favorites-container container">
          {!offers.length ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section> :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Paris</span>
                      </a>
                    </div>
                  </div>
                  <OffersList
                    styles={{
                      main: 'favorites__places',
                    }}
                    render={() => offers.map((offer) => <FavoriteOfferCard key={offer.id} offer={offer} styles={{article: 'favorites__card', info: 'favorites__card-info place-card__info'}}/>)}
                  />
                </li>
              </ul>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={`${AppRoute.ROOT}`}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerProps).isRequired,
};

export default FavoritesPage;
