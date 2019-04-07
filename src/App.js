import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import rootReducer from './reduсers/rootReducer';
// import { createStore } from 'redux';
import store from './store/store';
import Component1 from './components/Component1';

// var store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Component1 />
        <h1>App</h1>
      </Provider>
    );
  }
}

export default App;
