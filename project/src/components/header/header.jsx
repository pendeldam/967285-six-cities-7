import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signout} from '../../store/api-actions';
import {getUser, getAvatarUrl} from '../../store/app-user/selectors';
import {AppRoute} from '../../const';

function Header({user, avatarUrl, onExit}) {
  const handleLogout = (evt) => {
    evt.preventDefault();
    onExit();
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

Header.propTypes = {
  user: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  onExit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  avatarUrl: getAvatarUrl(state),
});

const mapDispatchToProps = (dispatch) => ({
  onExit() {
    dispatch(signout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
