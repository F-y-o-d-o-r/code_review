import { LOGGED_IN } from '../actions/actionsTypes';

let initialState = [
  {
    one: 'test of one'
  }
];

export default function logginCheck(state = initialState, action) {
  // switch (action.type) {
  //   case LOGGED_IN:
  //     return {
  //       initialState: [
  //         ...state,
  //         {
  //           newSate: action.text
  //         }
  //       ]
  //     };
  //   default:
  //     return state;
  // }
  return state;
}
