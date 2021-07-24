import React from 'react';
import {useSelector} from 'react-redux';
import {getErrorStats} from '../../store/app-state/selectors';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import {AppRoute} from '../../const';

function ErrorPage() {
  const error = useSelector(getErrorStats);

  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        <div className="container">
          <h1 data-testid="error-heading">{error.code}.&nbsp;{error.text}</h1>
          <Link to={AppRoute.ROOT}>Back to Main page</Link>
          <img src="img/page-not-found.jpg" alt={`${error.code}.${error.text}`}/>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
