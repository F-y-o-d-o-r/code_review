import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // let data = fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }

  render() {
    // let { logined } = this.props.logined;
    // console.log(logined);
    // if (!logined) {
    //   return <h1>Loading...</h1>;
    // }
    return (
      <div>
        <h1>news</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  logined: state.dataGet[0]
});
const mapDispatchToProps = (dispatch) => {
  return {
    // loggedIn: (state) => {
    //   dispatch(loggedIn(state));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
