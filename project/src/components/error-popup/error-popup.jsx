import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setConnectionStatus} from '../../store/action';
import {PopupType, CONNECTION_STATUS, REQUEST_SOURCE} from '../../const';

function ErrorPopup({id, style, message}) {
  const dispatch = useDispatch();

  const handleClosePopup = (evt) => {
    evt.preventDefault();

    switch(evt.target.id) {
      case PopupType.PAGE:
        dispatch(setConnectionStatus({
          type: REQUEST_SOURCE.PAGE,
          status: CONNECTION_STATUS.SUCCESS,
        }));
        break;

      case PopupType.COMMENT:
        dispatch(setConnectionStatus({
          type: REQUEST_SOURCE.COMMENT,
          status: CONNECTION_STATUS.SUCCESS,
        }));
        break;

      case PopupType.FAVORITE:
        dispatch(setConnectionStatus({
          type: REQUEST_SOURCE.FAVORITE,
          status: CONNECTION_STATUS.SUCCESS,
        }));
        break;
    }
  };

  return (
    <div className="popup popup__error" style={style}>
      <span className="popup__message">{message}</span>
      <button
        id={id}
        className="popup__button"
        onClick={handleClosePopup}
      >
        OK
      </button>
    </div>
  );
}

ErrorPopup.propTypes = {
  id: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorPopup;
