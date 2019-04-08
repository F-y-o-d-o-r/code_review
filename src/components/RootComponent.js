import React from 'react';
import { connect } from 'react-redux';
// import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { loggedIn } from '../actions/actions';

import HeaderMenu from './HeaderMenu';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import ErrorScreen from './ErrorScreen';

const RootComponent = (props) => {
  // console.log(props);
  return (
    <Router>
      <HeaderMenu nav={props} />
      {/* <Button onClick={() => props.loggedIn('new state')}>Click Here</Button> */}
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/news" component={NewsScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps
});
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: (state) => {
      dispatch(loggedIn(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
