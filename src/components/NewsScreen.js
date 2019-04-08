import React, { Component } from 'react';
import { connect } from 'react-redux';

import { takeData } from '../actions/dataAction';

class NewsScreen extends Component {
  componentDidMount() {
    this.props.onOpen(111111);
  }

  render() {
    // console.log(this.props);
    if (!this.props.state.dataGet.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>news</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onOpen: () => {
//       fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json()).then((json) =>
//         dispatch({
//           type: 'TAKE_DATA',
//           payload: json
//         })
//       );
//     }
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    onOpen: (id) => {
      dispatch(takeData(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
