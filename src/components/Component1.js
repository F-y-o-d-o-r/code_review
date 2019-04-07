import React from 'react';
import { connect } from 'react-redux';

const Component1 = (props) => {
  console.log(props);
  return (
    <div>
      <h1>component1</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  state: state
});

// const mapDispatchToProps = {
//   // ... normally is an object full of action creators
// };
// const connectToStore = connect(
//   mapStateToProps
//   // mapDispatchToProps
// );

// export default connect(mapStateToProps)(Component1);
// export default Component1;
export default connect(mapStateToProps)(Component1);
