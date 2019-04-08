import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.sass';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MainScreen from './components/MainScreen';
import LoginScreen from './components/LoginScreen';
import NewsScreen from './components/NewsScreen';
import ProfileScreen from './components/ProfileScreen';
import ErrorScreen from './components/ErrorScreen';

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Router>
        <App />
        <Switch>
          <Route path="/" exact component={MainScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/news" component={NewsScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route component={ErrorScreen} />
        </Switch>
      </Router>
    </Container>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
