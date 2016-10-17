import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

const mapStateToProps = function (state) {
  return {
    allPuppies: state.allPuppies,
  };
};


export default connect(
  mapStateToProps
)(AllPuppies);
