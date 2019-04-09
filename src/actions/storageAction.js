import { LOGGED_IN, MENU_CHANGE } from './actionsTypes';

export function checkStorage() {
  return (dispatch) => {
    let storage = localStorage.getItem('login');
    let thisUrl = document.location.pathname.slice(1);
    console.log(thisUrl);
    if (storage) {
      dispatch({
        type: LOGGED_IN,
        payload: true
      });
    }
  };
}
