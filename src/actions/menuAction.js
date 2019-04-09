import { MENU_CHANGE } from './actionsTypes';

export function menuChange(place) {
  return (dispatch) => {
    dispatch({
      type: MENU_CHANGE,
      payload: place
    });
  };
}
