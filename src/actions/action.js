import { LOGGED_IN } from './actionTypes';

export function loggedIn(name) {
  return { type: LOGGED_IN, name };
}
