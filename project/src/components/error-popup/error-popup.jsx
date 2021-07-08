import React from 'react';
import PropTypes from 'prop-types';

function ErrorPopup({message, style}) {
  return <div style={style} className="popup popup__error">{message}</div>;
}

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default ErrorPopup;
