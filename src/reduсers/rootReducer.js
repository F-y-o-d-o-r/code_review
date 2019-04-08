import { combineReducers } from 'redux';

import { logginCheck, dataGet } from './firstReducer';

const rootReducer = combineReducers({
  logginCheck,
  dataGet
});

export default rootReducer;
