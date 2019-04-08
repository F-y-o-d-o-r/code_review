import { LOGGED_IN, LOGGED_OUT } from '../actions/actionsTypes';

let initialState = {
  login: false
};

export function logging(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        login: true
      };
    case LOGGED_OUT:
      return {
        login: false
      };
    default:
      return state;
  }
}
