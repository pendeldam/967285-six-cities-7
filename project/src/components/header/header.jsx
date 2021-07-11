import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, getAvatarUrl} from '../../store/app-user/selectors';
import {signout} from '../../store/api-actions';
import {AppRoute} from '../../const';

function Header() {
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const avatarUrl = useSelector(getAvatarUrl);

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(signout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.ROOT}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={`${AppRoute.FAVORITES}`}>
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={{backgroundImage: `url(${avatarUrl})`}}
                  />
                  <span className="header__user-name user__name">
                    {user ? user : 'Sign in'}
                  </span>
                </Link>
              </li>
              {user &&
                <li className="header__nav-item">
                  <Link
                    to={AppRoute.ROOT}
                    className="header__nav-link"
                    onClick={handleLogout}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
