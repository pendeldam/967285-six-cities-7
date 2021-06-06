import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  offersCount: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Setting.offersCount}/>
  </React.StrictMode>,
  document.getElementById('root'));
