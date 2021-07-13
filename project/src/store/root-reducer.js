import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appUser} from './app-user/app-user';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: appUser,
});
