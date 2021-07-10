import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getCity, getActiveOffer} from '../../store/app-data/selectors';
import {login} from '../../store/api-actions';
import Header from '../header/header';
import ErrorPopup from '../error-popup/error-popup';
import {AppRoute} from '../../const';
import {isWrongPassword} from '../../utils';

function LoginPage() {
  const loginRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const activeOffer = useSelector(getActiveOffer);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isWrongPassword(passRef.current.value)) {
      setError(true);
      return;
    }

    dispatch(
      login({
          login: loginRef.current.value,
          password: passRef.current.value,
          activeOffer,
        })
    );
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passRef}
                />
                {error &&
                  <ErrorPopup
                    style={{bottom: '-80px'}}
                    message={'Passwords with only spaces not allowed'}
                  />}
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>{city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
