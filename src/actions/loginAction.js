import { LOGGED_IN, LOGGED_OUT } from './actionsTypes';

export function login(index) {
  return {
    type: LOGGED_IN,
    payload: true
  };
}

export function logout(index) {
  return {
    type: LOGGED_OUT,
    payload: false
  };
}
