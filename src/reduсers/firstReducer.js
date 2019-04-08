import { LOGGED_IN, LOGGED_OUT, TAKE_DATA } from '../actions/actionsTypes';

let initialState = [
  {
    one: 'test of one'
  }
];
let initialState2 = [
  {
    logined: true
  }
];

export function logginCheck(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return [
        ...state,
        {
          test: action.name
        }
      ];
    case TAKE_DATA:
      return [
        ...state,
        {
          data: action.data
        }
      ];
    default:
      return state;
  }
}

export function dataGet(state = initialState2, action) {
  switch (action.type) {
    case TAKE_DATA:
      return [
        ...state,
        {
          data: action.data
        }
      ];
    default:
      return state;
  }
}
