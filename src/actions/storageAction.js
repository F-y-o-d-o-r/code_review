import { login } from './loginAction';

export function checkStorage(thisUrl) {
  return (dispatch) => {
    let storage = localStorage.getItem('login');
    if (storage) {
      dispatch(login());
    }
  };
}
