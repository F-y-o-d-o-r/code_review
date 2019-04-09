import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkStorage } from '../actions/storageAction';
import HeaderMenu from './HeaderMenu';

class RootComponent extends React.Component {
  componentDidMount() {
    this.props.checkStorage();
  }
  render() {
    return <HeaderMenu />;
  }
}

//! почему не отработало???
// const RootComponent = (props) => {
//   useEffect(() => {
//     checkStorage();
//   });
//   return <HeaderMenu />;
// };
//! почему не отработало???

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps
});
const mapDispatchToProps = (dispatch) => {
  return {
    checkStorage: (state) => {
      dispatch(checkStorage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
