import { MENU_CHANGE } from '../actions/actionsTypes';

let initialState = {
  place: ''
};

export function menuChange(state = initialState, action) {
  switch (action.type) {
    case MENU_CHANGE:
      return {
        place: action.payload
      };
    default:
      return state;
  }
}
