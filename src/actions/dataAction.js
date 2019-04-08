import { TAKE_DATA } from './actionsTypes';

export function takeData(index) {
  return {
    type: TAKE_DATA,
    payload: index
  };
}
