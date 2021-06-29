/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import cityProp from '../cities-container/city.prop';
import locationProp from '../cities-container/location.prop';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  is_premium: PropTypes.bool.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  preview_image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  max_adults: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    is_pro: PropTypes.bool.isRequired,
  }).isRequired,
  city: cityProp,
  location: locationProp,
}).isRequired;
