import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import cityProp from '../cities-container/city.prop';
import offerProps from '../offer-card/offer-card.prop';
import {URL_MARKER_DEFAULT, URL_MARKER_ACTIVE} from '../../const';

function Map({city, offers, activeOffer}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const prevActiveOffer = useRef();

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      prevActiveOffer.current = activeOffer;

      if (prevActiveOffer !== activeOffer) {
        [...map.getPane('markerPane').children]
          .forEach((marker) => marker.remove());
      }

      map.flyTo([city.location.latitude, city.location.longitude]);

      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;

        leaflet.marker({
          lat: latitude,
          lng: longitude,
        }, {
          icon: (activeOffer && offer.id === activeOffer.id)
            ? activeCustomIcon
            : defaultCustomIcon,
        }).addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div id="map" ref={mapRef} style={{height: '100%'}}></div>;
}

Map.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(offerProps),
  activeOffer: PropTypes.oneOfType([offerProps, PropTypes.object]),
};

export default Map;
