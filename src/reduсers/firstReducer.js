import { LOGGED_IN } from '../actions/actionsTypes';

let initialState = [
  {
    one: 'test of one'
  }
];

export default function logginCheck(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        todos: [
          ...state,
          {
            text: action.text
          }
        ]
      });
    default:
      return state;
  }
}
