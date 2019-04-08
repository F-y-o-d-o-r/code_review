import { combineReducers } from 'redux';

import { logging } from './loginReduser';
import { dataGet } from './dataReduser';

const rootReducer = combineReducers({
  logging,
  dataGet
});

export default rootReducer;
