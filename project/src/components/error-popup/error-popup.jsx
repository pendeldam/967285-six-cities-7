import React from 'react';
import PropTypes from 'prop-types';

function ErrorPopup({message}) {
  return <div className="popup popup__error">{message}</div>;
}

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPopup;
