import {AuthorizationStatus} from './const';

export const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

export const getRandomIntegerNumber = (min, max) =>(Math.floor(Math.random() * (max - min) + min));

export const getRandomArrayItem = (array) => array[getRandomIntegerNumber(0, array.length)];

export const getRandomArray = (length, cb) => new Array(length)
  .fill('')
  .map(cb);

export const isCheckedAuth = (authStatus) => authStatus === AuthorizationStatus.UNKNOWN;

export const isWrongPassword = (value) => [...value].every((it) => it === ' ');

export const adaptToClient = (offers) => {
  return offers.map((offer) => {
    const result = Object.assign(
      {}, offer,
      {
        isPremium: offer.is_premium,
        isFavorite: offer.is_favorite,
        previewImage: offer.preview_image,
        maxAdults: offer.max_adults,
        host: {
          id: offer.host.id,
          name: offer.host.name,
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro,
        }
      },
    );

    delete result.is_premium;
    delete result.is_favorite;
    delete result.preview_image;
    delete result.max_adults;
    delete result.host.avatar_url;
    delete result.host.is_pro;

    return result;
  });
};
