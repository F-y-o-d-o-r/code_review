import { LOGGED_IN } from './actionsTypes';

export function checkStorage(thisUrl) {
  return (dispatch) => {
    let storage = localStorage.getItem('login');
    if (storage) {
      dispatch({
        type: LOGGED_IN,
        payload: true
      });
    }
  };
}
