import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import store from './store';
import { getPuppiesById, loadPuppies } from './action-creators';
import { Provider } from 'react-redux';

import AllPuppies from './AllPuppies';


const onSinglePuppyEntry = function (nextRouterState) {
  const thunk = getPuppiesById(nextRouterState.params.puppyId);
  store.dispatch(thunk);
};


const onAppEntry = function (nextRouterState) {
  const thunk = loadPuppies();
  store.dispatch(thunk);
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" onEnter={onAppEntry}>
        <Route path="puppies" component={AllPuppiesContainer} onEnter={onAppEntry} />
        <Route path="puppies/:puppyId" component={SinglePuppyContainer} onEnter={onSinglePuppyEntry} />
        <IndexRoute component={AllPuppiesContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
