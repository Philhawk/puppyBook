'use strict'

import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppies } from './action-creators';
const hardCodedPuppies = [{ id: 1, name: 'Cody' }, { id: 2, name: 'Ben' }, { id: 3, name: 'Bubba' }];

const mapStateToProps = function(state){
  return{
    allPuppies: state.allPuppies
  }
}

const mapDispatchToProps = function(dispatch){
  return {
      loadAllPuppies: function(){
        dispatch(loadPuppies())
      }
    }
  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPuppies);
