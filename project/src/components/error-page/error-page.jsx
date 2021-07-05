import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import {AppRoute} from '../../const';

function ErrorPage() {
  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        <div className="container">
          <h1>404. Page not found</h1>
          <Link to={AppRoute.ROOT}>Back to Main page</Link>
          <img src="img/page-not-found.jpg" alt="404. Page not found"/>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
