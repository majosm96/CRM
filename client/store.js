import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import clientReducer from './Client/ClientReducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const store = createStore(clientReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
