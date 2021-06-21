import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import cityProp from '../cities-container/city.prop';
import offerProps from '../offer-card/offer-card.prop';
import {URL_MARKER_DEFAULT} from '../../const';

function Map({city, offers}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      map.setView([
        city.location.latitude,
        city.location.longtitude],
      city.location.zoom,
      );

      offers.forEach((offer) => {
        const {latitude, longtitude} = offer.location;

        leaflet.marker({
          lat: latitude,
          lng: longtitude,
        }, {
          icon: defaultCustomIcon,
        }).addTo(map);
      });
    }
  }, [map, offers, city]);

  return <div id="map" ref={mapRef} style={{height: '100%'}}></div>;
}

Map.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(offerProps),
};

export default Map;
