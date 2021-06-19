import React from 'react';
import PropTypes from 'prop-types';
import cityProp from '../cities-container/city.prop';
import {CITIES} from '../../const';

function CitiesList({city, changeCity}) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((it, index) => (
          <li
          key={index}
          className="locations__item">
            <a
              onClick={() => changeCity(it)}
              className={it.name === city.name
              ? `locations__item-link tabs__item tabs__item--active`
              : `locations__item-link tabs__item`}
              href="#"
            >
              <span>{it.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  city: cityProp,
  changeCity: PropTypes.func.isRequired,
};

export default CitiesList;
