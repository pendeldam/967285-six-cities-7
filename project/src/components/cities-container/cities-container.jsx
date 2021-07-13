import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {getCityOffers} from '../../store/app-data/selectors';
import CityPlaces from '../city-places/city-places';
import Map from '../../components/map/map';
import EmptyOfferList from '../empty-offer-list/empty-offer-list';
import cityProp from '../cities-container/city.prop';

function CitiesContainer({city}) {
  const offers = useSelector(getCityOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        {offers.length ?
          <Fragment>
            <CityPlaces city={city}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  offers={offers}
                />
              </section>
            </div>
          </Fragment>
          : <EmptyOfferList city={city}/>}
      </div>
    </div>
  );
}

CitiesContainer.propTypes = {
  city: cityProp,
};

export default CitiesContainer;
