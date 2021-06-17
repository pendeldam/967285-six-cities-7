import PropTypes from 'prop-types';

export default PropTypes.shape({
  zoom: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longtitude: PropTypes.number.isRequired,
}).isRequired;
