import { combineReducers } from 'redux';

import { logging } from './loginReduser';
import { dataGet } from './dataReduser';
import { menuChange } from './menuReduser';

const rootReducer = combineReducers({
  logging,
  dataGet,
  menuChange
});

export default rootReducer;
