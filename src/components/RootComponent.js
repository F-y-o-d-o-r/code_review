import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';

import HeaderMenu from './HeaderMenu';

const RootComponent = (props) => {
  return <HeaderMenu nav={props} />;
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps
});
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: (state) => {
      dispatch(login(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
