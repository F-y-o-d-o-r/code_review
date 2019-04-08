import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reduсers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
