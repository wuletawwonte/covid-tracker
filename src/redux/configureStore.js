import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import continents from './continents/continents';

const rootReducer = combineReducers({
  continents,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
