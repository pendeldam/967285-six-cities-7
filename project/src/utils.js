import {AuthorizationStatus} from './const';

export const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

export const isCheckedAuth = (authStatus) => authStatus === AuthorizationStatus.UNKNOWN;

export const isWrongPassword = (value) => [...value].every((it) => it === ' ');

const setCapitalLetter = (str) => (
  str.replace(str.charAt(0), str.charAt(0).toUpperCase())
);

const setCamelCase = (str) => {
  const parts = str.split('_');

  return parts.map((part, index) => {
    if (index === 0) {
      return part;
    }

    return setCapitalLetter(part);
  }).join('');
};

export const adapt2Client = (obj) => (
  Object.entries(obj).reduce((result, [key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return {...result, [key]: adapt2Client(value)};
    }

    if (key.includes('_')) {
      const camelKey = setCamelCase(key);
      return {...result, [camelKey]: value};
    }

    return {...result, [key]: value};
  }, {})
);
