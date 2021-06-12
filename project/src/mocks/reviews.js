/* eslint-disable camelcase */
import {nanoid} from 'nanoid';
import {getRandomIntegerNumber, getRandomArrayItem, getRandomArray} from '../utils';

const REVIEWS_COUNT = 3;

const AUTHOR_NAMES = ['Paul', 'Anna', 'Nicole', 'Sam', 'Alex'];

const AUTHOR_AVATAR_URL = 'https://i.pravatar.cc/128';

const REVIEW_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const getRandomText = () => getRandomArrayItem(REVIEW_TEXT.split('.'));

const getRandomDate = () => {
  const date = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;

  date.setMonth(date.getMonth() + getRandomIntegerNumber(0, 5) * sign);
  date.setFullYear(date.getFullYear() + getRandomIntegerNumber(0, 5) * sign);

  return date;
};

export const reviews = new Array(REVIEWS_COUNT)
  .fill('')
  .map((review) => {

    review = {
      id: nanoid(),
      rating: getRandomIntegerNumber(1, 6),
      comment: getRandomArray(getRandomIntegerNumber(5, 8), getRandomText).join('.'),
      date: getRandomDate(),
      user: {
        name: getRandomArrayItem(AUTHOR_NAMES),
        avatar_url: `${AUTHOR_AVATAR_URL}?rnd=${Math.random()}`,
        id: nanoid(),
        is_pro: Boolean(Math.random() > 0.5),
      },
    };

    return review;
  });
