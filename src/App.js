import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Component1 from './components/Component1';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Component1 />
      </Provider>
    );
  }
}

export default App;
