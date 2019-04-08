import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reduсers/rootReducer';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

export default store;
