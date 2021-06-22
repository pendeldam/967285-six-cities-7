export const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

export const getRandomIntegerNumber = (min, max) =>(Math.floor(Math.random() * (max - min) + min));

export const getRandomArrayItem = (array) => array[getRandomIntegerNumber(0, array.length)];

export const getRandomArray = (length, cb) => new Array(length)
  .fill('')
  .map(cb);

export const getCityOffers = (city, offers) => (
  offers.filter((offer) => offer.city.name === city.name)
);
