import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import CityPlaces from '../city-places/city-places';
import Map from '../../components/map/map';
import EmptyOfferList from '../empty-offer-list/empty-offer-list';
import cityProp from '../cities-container/city.prop';
import offerProps from '../offer-card/offer-card.prop';

function CitiesContainer({city, offers, activeOffer, setActiveOffer}) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        {offers ?
          <Fragment>
            <CityPlaces city={city} offers={offers} setActiveOffer={setActiveOffer}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers} activeOffer={activeOffer}/>
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
  offers: PropTypes.arrayOf(offerProps),
  activeOffer: PropTypes.oneOfType([offerProps, PropTypes.object]),
  setActiveOffer: PropTypes.func.isRequired,
};

export default CitiesContainer;
