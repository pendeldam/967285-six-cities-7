import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appState} from './app-state/app-state';
import {appUser} from './app-user/app-user';

export const NameSpace = {
  DATA: 'DATA',
  STATE: 'STATE',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.STATE]: appState,
  [NameSpace.USER]: appUser,
});
