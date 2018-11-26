import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import notes from './notes';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  notes,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware)
);