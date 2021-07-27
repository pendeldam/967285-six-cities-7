import React from 'react';
import cityProp from '../cities-container/city.prop';

function EmptyOfferList({city}) {
  return (
    <React.Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </React.Fragment>
  );
}

EmptyOfferList.propTypes = {
  city: cityProp,
};

export default EmptyOfferList;
