import { TAKE_DATA } from './actionsTypes';

function saveData(index) {
  return {
    type: TAKE_DATA,
    payload: index
  };
}

export function takeData(index) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => dispatch(saveData(json)));
  };
}
