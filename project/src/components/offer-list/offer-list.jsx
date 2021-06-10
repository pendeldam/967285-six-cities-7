import React from 'react';
import PropTypes from 'prop-types';
import stylesProp from '../offer-card/styles.prop';

function OfferList(props) {
  return (
    <div className={props.styles.main}>
      {props.render()}
    </div>
  );
}

OfferList.propTypes = {
  styles: stylesProp.isRequired,
  render: PropTypes.func.isRequired,
};

export default OfferList;
