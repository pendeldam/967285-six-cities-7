import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  offersCount: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={Setting.offersCount}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
