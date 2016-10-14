'use strict'

import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppies } from './action-creators';

const mapStateToProps = function(state){
  return{
    allPuppies: state.allPuppies
  }
}


export default connect(
  mapStateToProps
)(AllPuppies);
