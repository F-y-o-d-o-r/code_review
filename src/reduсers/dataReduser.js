import { TAKE_DATA } from '../actions/actionsTypes';

let initialState1 = {
  data: null
};

export function dataGet(state = initialState1, action) {
  switch (action.type) {
    case TAKE_DATA:
      return {
        data: action.payload
      };
    default:
      return state;
  }
}
