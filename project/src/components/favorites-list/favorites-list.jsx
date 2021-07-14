import React from 'react';
import PropTypes from 'prop-types';
import OfferList from '../offer-list/offer-list';
import FavoriteOfferCard from '../offer-card/favorite-offer-card';
import offerCardProp from '../offer-card/offer-card.prop';

function FavoriteList({favorites}) {
  const cities = new Set(favorites.map((offer) => offer.city.name));

  const offersByCity = [...cities]
    .map((city) => (
      [city, favorites.filter((it) => it.city.name === city)]
    ));

  return (
    <ul className="favorites__list">
      {offersByCity.map(([city, offers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <OfferList
            styles={{
              main: 'favorites__places',
            }}
            render={() => (
              offers.map((offer) => (
                <FavoriteOfferCard
                  key={offer.id}
                  offer={offer}
                  styles={{
                    article: 'favorites__card',
                    info: 'favorites__card-info place-card__info',
                  }}
                />
              ))
            )}
          />
        </li>
      ))}
    </ul>
  );
}

FavoriteList.propTypes = {
  favorites: PropTypes.arrayOf(offerCardProp),
};

export default FavoriteList;
