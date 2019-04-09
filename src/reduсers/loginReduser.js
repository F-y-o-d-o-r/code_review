import { LOGGED_IN, LOGGED_OUT, LOGIN_ERROR } from '../actions/actionsTypes';

let initialState = {
  login: false,
  error: ''
};

export function logging(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        login: true
      };
    case LOGGED_OUT:
      return {
        ...state,
        login: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
