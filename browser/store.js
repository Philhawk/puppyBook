import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';

export default createStore(
    rootReducer,
    applyMiddleware(
      createLogger(),
      thunkMiddleware
    )
  );
