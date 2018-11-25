import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import notes from './notes';

const rootReducer = combineReducers({
  notes,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware)
);