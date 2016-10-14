'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import store from './store';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import AllPuppies from './AllPuppies'

const onEnter = function(nextRouterState){
  
})

ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
          <Route path="puppies" component={AllPuppiesContainer} />
          <IndexRoute component={AllPuppiesContainer} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
);
