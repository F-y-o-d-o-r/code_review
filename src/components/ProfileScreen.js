import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {
  render() {
    const { login } = this.props.state.logging;
    if (!login) {
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
  state: state
});

export default connect(mapStateToProps)(ProfileScreen);
