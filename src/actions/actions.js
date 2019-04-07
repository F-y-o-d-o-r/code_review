import { LOGGED_IN } from './actionsTypes';

export const loggedIn = (name) => ({
  type: LOGGED_IN,
  name
});
