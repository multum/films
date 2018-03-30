import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import filmReducer from './filmReducer';
import filmsReducer from './filmsReducer';
import searchReducer from './searchReducer';
import addFilmReducer from './addFilmReducer';

export default combineReducers({
  addFilmReducer,
  searchReducer,
  filmReducer,
  filmsReducer,
  routerReducer
});