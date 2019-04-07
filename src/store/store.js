import { createStore } from 'redux';
import rootReducer from '../reduсers/rootReducer';

var store = createStore(rootReducer);

export default store;
