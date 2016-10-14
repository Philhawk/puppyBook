'use strict'

import { createStore, applyMiddleware } from 'redux';
import allPuppiesReducer from './reducer.js';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
    allPuppiesReducer,
    applyMiddleware(
      createLogger(),
      thunkMiddleware
    )
  );
