import PropTypes from 'prop-types';
import cityProp from '../cities-container/city.prop';
import locationProp from '../cities-container/location.prop';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  previewImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
  city: cityProp,
  location: locationProp,
}).isRequired;
