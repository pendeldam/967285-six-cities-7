import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getFavorites, getIsFavoriteLoaded} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/app-user/selectors';
import {redirectToRoute} from '../../store/action';
import {sendFavorite} from '../../store/api-actions';
import {CONNECTION_STATUS, AppRoute, AuthorizationStatus, checkFavorite} from '../../const';

function FavoriteButton({id, styles}) {
  const dispatch = useDispatch();

  const favorites = useSelector(getFavorites);
  const isFavoriteLoaded = useSelector(getIsFavoriteLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const isFavorite = favorites.length ? checkFavorite(favorites, id) : false;

  const status = isFavorite ? 0 : 1;

  const bookmarkStyle = isFavorite
    ? `${styles.bookmark}__bookmark-button ${styles.bookmark}__bookmark-button--active button`
    : `${styles.bookmark}__bookmark-button button`;

  const handleBookmark = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      dispatch(sendFavorite(id, status));
    }
  };

  return (
    <button
      type="button"
      className={bookmarkStyle}
      onClick={handleBookmark}
      disabled={isFavoriteLoaded === CONNECTION_STATUS.ERROR}
    >
      <svg
        className={`${styles.bookmark}__bookmark-icon`}
        width={styles.width}
        height={styles.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  styles: PropTypes.shape({
    bookmark: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoriteButton;
