import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Container } from 'semantic-ui-react';
import RootComponent from './components/RootComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <RootComponent />
        </Container>
      </Provider>
    );
  }
}

export default App;
