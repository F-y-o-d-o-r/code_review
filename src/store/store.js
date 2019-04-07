import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reduсers/rootReducer';
import logger from 'redux-logger';

var store = createStore(rootReducer, applyMiddleware(logger));

export default store;
