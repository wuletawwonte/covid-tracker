import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import continents from './continents/continents';
import countries from './countries/countries';
import themes from './themes/themes';

const rootReducer = combineReducers({
  continents,
  countries,
  themes,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
