import { LOGGED_IN, TAKE_DATA } from './actionsTypes';

export const loggedIn = (name) => ({
  type: LOGGED_IN,
  name
});
// export const data = () => ({
//   type: TAKE_DATA,
//   // data: fetch('https://jsonplaceholder.typicode.com/photos')
//   //   .then((response) => response.json())
//   //   .then((json) => console.log(json))
//   data: 1111111111111111111
// });
export function takeData(index) {
  return {
    type: TAKE_DATA,
    data: index
  };
}
