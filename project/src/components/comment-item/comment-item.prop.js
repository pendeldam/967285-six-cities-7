/* eslint-disable camelcase */
import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    is_pro: PropTypes.bool.isRequired,
  }).isRequired,
}).isRequired;
