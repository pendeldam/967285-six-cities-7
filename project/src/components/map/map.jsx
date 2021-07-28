import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getActiveOffer} from '../../store/app-data/selectors';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import cityProp from '../cities-container/city.prop';
import offerProps from '../offer-card/offer-card.prop';
import {URL_MARKER_DEFAULT, URL_MARKER_ACTIVE} from '../../const';

function Map({city, offers}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const activeOffer = useSelector(getActiveOffer);
  const prevActiveOffer = useRef();

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [14, 20],
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [14, 20],
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
};

export default Map;
