import { LOGGED_IN, LOGGED_OUT } from '../actions/actionsTypes';

let initialState = [
  {
    one: 'test of one',
    test: ''
  }
];

export default function logginCheck(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return [
        ...state,
        {
          test: action.name
        }
      ];
    default:
      return state;
  }
}
