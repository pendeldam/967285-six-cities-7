export const getRandomIntegerNumber = (min, max) =>(Math.floor(Math.random() * (max - min) + min));

export const getRandomArrayItem = (array) => array[getRandomIntegerNumber(0, array.length)];

export const getRandomArray = (length, cb) => new Array(length)
  .fill('')
  .map(cb);
