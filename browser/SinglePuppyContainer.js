'use strict'

import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = function(state){
  return{
    singlePuppy: state.selectedPuppy
  }
}


export default connect(
  mapStateToProps
)(SinglePuppy);
