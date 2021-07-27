import {combineReducers} from 'redux';
import {appState} from './app-state/app-state';
import {appData} from './app-data/app-data';
import {appUser} from './app-user/app-user';

export const NameSpace = {
  STATE: 'STATE',
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.STATE]: appState,
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: appUser,
});
