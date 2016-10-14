'use strict'

import {RECEIVE_PUPPIES} from './action-creators';

const allPuppiesReducer = function(state = {allPuppies: []}, action) {
  switch (action.type) {
    case RECEIVE_PUPPIES: return Object.assign({}, state, {allPuppies: action.puppies});
    default: return state
  }
}

export default allPuppiesReducer;
