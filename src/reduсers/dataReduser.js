import { TAKE_DATA } from '../actions/actionsTypes';

let initialState = {
  data: null
};

export function dataGet(state = initialState, action) {
  switch (action.type) {
    case TAKE_DATA:
      return {
        data: action.data
      };
    default:
      return state;
  }
}
