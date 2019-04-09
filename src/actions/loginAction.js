import { LOGGED_IN, LOGGED_OUT, LOGIN_ERROR, MENU_CHANGE } from './actionsTypes';

export function loginCheck(name, pass, history) {
  return (dispatch) => {
    if (name === 'Admin' && pass === '12345') {
      localStorage.setItem('login', true);
      dispatch({
        type: LOGGED_IN,
        payload: true
      });
      history.push('/profile');
    } else {
      console.log('wrong');
      dispatch({
        type: LOGIN_ERROR,
        payload: 'Имя пользователя или пароль введены не верно'
      });
    }
  };
}

export function logout(index) {
  return (dispatch) => {
    localStorage.removeItem('login');
    dispatch({
      type: LOGGED_OUT,
      payload: false
    });
  };
}
