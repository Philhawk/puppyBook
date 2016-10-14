'use strict'

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer.js';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
    rootReducer,
    applyMiddleware(
      createLogger(),
      thunkMiddleware
    )
  );
