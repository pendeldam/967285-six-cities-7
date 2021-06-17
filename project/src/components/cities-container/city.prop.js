import PropTypes from 'prop-types';
import locationProp from './location.prop';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: locationProp,
}).isRequired;
