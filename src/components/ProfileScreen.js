import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {
  state = {
    logined: false
  };
  render() {
    let { logined } = this.props.logined;
    if (logined) {
      return <Redirect to={'/login'} />;
    }
    return (
      <div>
        <h1>profile screen</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  logined: state.dataGet[0]
});

export default connect(mapStateToProps)(ProfileScreen);
