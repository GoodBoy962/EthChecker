import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

export const Store = createStore(
  combineReducers(reducers),
  applyMiddleware(
    logger,
    thunk
  )
);

export default Store;