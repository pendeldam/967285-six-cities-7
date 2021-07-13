import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import {AppRoute} from '../../const';
import {getFavorites} from '../../store/app-data/selectors';

function FavoritesPage() {
  const favorites = useSelector(getFavorites);

  return (
    <div className={!favorites.length
      ? 'page page--favorites-empty'
      : 'page'}
    >

      <Header/>

      <main className={!favorites.length
        ? 'page__main page__main--favorites page__main--favorites-empty'
        : 'page__main page__main--favorites'}
      >

        <div className="page__favorites-container container">
          {!favorites.length ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section> :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favorites={favorites}/>
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

export default FavoritesPage;
