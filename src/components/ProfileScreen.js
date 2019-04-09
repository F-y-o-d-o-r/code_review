import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {
  state = {
    logined: false
  };
  componentDidMount() {}

  render() {
    // console.log(this.props);
    if (false) {
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
  // logined: state.dataGet[0]
});
const mapDispatchToProps = (dispatch) => {
  // return dispatch({
  //   type: 'TAKE_DATA',
  //   payload: 11
  // });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
