import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchOffer} from '../../store/api-actions';
import Header from '../header/header';
import ReviewList from '../review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../offer-list/offer-list';
import NearestOfferCard from '../offer-card/nearest-offer-card';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorPage from '../error-page/error-page';
import offerProps from '../offer-card/offer-card.prop';
import {CONNECTION_STATUS, RatingPercent, OfferTypes} from '../../const';

function OfferPage({isDataLoaded, offer, nearbyOffers, authorizationStatus, loadOffer}) {
  const location = useLocation();
  const id = useParams().id;

  useEffect(() => loadOffer(id), [location]);

  if (isDataLoaded === CONNECTION_STATUS.ERROR) {
    return <ErrorPage/>;
  }

  if (!offer || isDataLoaded === CONNECTION_STATUS.WAIT) {
    return <LoadingScreen/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, 6).map((image) => (
                <div key={`${image}${offer.id}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: RatingPercent[offer.rating]}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {OfferTypes[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
                    <li key={`${good}${offer.id}`} className="property__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.isPro && 'property__avatar-wrapper--pro'}`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewList
                id={id}
                authorizationStatus={authorizationStatus}
              />
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={offer.city}
              activeOffer={offer}
              offers={[...nearbyOffers, offer]}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {nearbyOffers &&
              <OfferList
                styles={{main: 'near-places__list places__list'}}
                render={() => (
                  nearbyOffers.map((it) => (
                    <NearestOfferCard
                      key={it.id}
                      offer={it}
                      styles={{article: 'near-places__card'}}
                    />
                  ))
                )}
              />}
          </section>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
});

OfferPage.propTypes = {
  offer: PropTypes.oneOfType([offerProps, PropTypes.object]),
  nearbyOffers: PropTypes.arrayOf(offerProps),
  loadOffer: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
