/* eslint-disable camelcase */
import {nanoid} from 'nanoid';
import {getRandomIntegerNumber, getRandomArrayItem, getRandomArray} from '../utils';
import {CITIES} from '../const';

const OFFERS_COUNT = 24;

const OFFER_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const OFFER_TITLES = [
  'Beautiful and luxurious apartment at great location',
  'Wood and stone place',
  'Canal View Prinsengracht',
  'Nice, cozy, warm big bed apartment',
];

const OFFER_TYPES = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

const OFFER_IMAGES = [
  'apartment-01',
  'apartment-02',
  'apartment-03',
  'room',
];

const OFFER_AMENITIES = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

const HOST_NAMES = ['Paul', 'Anna', 'Nicolette', 'Sam', 'Alex'];
const HOST_AVATAR_URL = 'https://api.adorable.io/avatars/128';

const getRandomCoords = (city) => {
  const randomNumber = getRandomIntegerNumber(10e5, 30e5) / 10e8;
  const sign = Math.random() > 0.5 ? 1 : -1;
  const latitude = city.location.latitude + (randomNumber * sign);
  const longtitude = city.location.longtitude + (randomNumber * sign);

  return {
    latitude,
    longtitude,
    zoom: 8,
  };
};

const getRandomPhoto = () => ({
  url: `img/${getRandomArrayItem(OFFER_IMAGES)}.jpg`,
  alt: getRandomArrayItem(OFFER_DESCRIPTION.split('.')),
});

const getRandomText = () => getRandomArrayItem(OFFER_DESCRIPTION.split('.'));
const getRandomAmenity = () => getRandomArrayItem(OFFER_AMENITIES);

export const offers = new Array(OFFERS_COUNT)
  .fill('')
  .map((offer) => {
    const city = getRandomArrayItem(CITIES);

    offer = {
      id: nanoid(),
      price: getRandomIntegerNumber(100, 1001),
      rating: getRandomIntegerNumber(1, 6),
      title: getRandomArrayItem(OFFER_TITLES),
      type: getRandomArrayItem(Object.values(OFFER_TYPES)),
      is_premium: Boolean(Math.random() > 0.5),
      is_favorite: Boolean(Math.random() > 0.5),
      preview_image: getRandomPhoto(),
      images: getRandomArray(getRandomIntegerNumber(3, 7), getRandomPhoto),
      description: getRandomArray(getRandomIntegerNumber(5, 8), getRandomText).join('.'),
      bedrooms: getRandomIntegerNumber(1, 3),
      max_adults: getRandomIntegerNumber(1, 5),
      goods: getRandomArray(getRandomIntegerNumber(3, 9), getRandomAmenity),
      host: {
        id: nanoid(),
        name: getRandomArrayItem(HOST_NAMES),
        avatar_url: `${HOST_AVATAR_URL}/${Math.random()}`,
        is_pro: Boolean(Math.random() > 0.5),
      },
      city,
      location: getRandomCoords(city),
    };

    return offer;
  });
