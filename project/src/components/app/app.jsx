import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App({offersCount}) {
  return <MainPage offersCount={offersCount}/>;
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
