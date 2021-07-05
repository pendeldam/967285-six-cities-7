import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import Header from '../header/header';
import ErrorPopup from '../error-popup/error-popup';
import cityProp from '../cities-container/city.prop';
import {AppRoute} from '../../const';
import {isWrongPassword} from '../../utils';

function LoginPage({city, onSubmit}) {
  const loginRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isWrongPassword(passRef.current.value)) {
      setError(true);
      return;
    }

    onSubmit({
      login: loginRef.current.value,
      password: passRef.current.value,
    });
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
                {error && <ErrorPopup message={'Passwords with only spaces not allowed'}/>}
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

LoginPage.propTypes = {
  city: cityProp,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({city}) => ({
  city,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(login(data));
  },
});

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
