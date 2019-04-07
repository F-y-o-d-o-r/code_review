import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { loggedIn } from '../actions/actions';

const Component1 = (props) => {
  return (
    <div>
      <h1>component1</h1>
      <Button onClick={() => props.loggedIn('new state')}>Click Here</Button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  state: state
});
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: (state) => {
      dispatch(loggedIn(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
