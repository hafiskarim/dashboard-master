import Axios from "axios";
import * as actionTypes from "./actionTypes";

const apiEndPoint = "http://localhost:3000";

export const getUser = () => dispatch => {
  Axios.get(`${apiEndPoint}/users`)
    .then(response => {
      dispatch({
        type: actionTypes.GET_USER_COMPLETE,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: actionTypes.GET_USER_ERROR,
        payload: error
      });
    });
};

// export const getUser = () => {
//   const request = Axios.get(`${apiEndPoint}/users`);
//   return {
//     type: actionTypes.GET_USER_COMPLETE,
//     payload: request
//   };
// };

export const addUser = users => {
  const addDataUser = {
    firstName: users.firstName,
    lastName: users.lastName,
    email: users.email
  };
  console.log(addDataUser);
  return dispatch => {
    Axios.post("http://localhost:3000/users", addDataUser)
      .then(response => {
        dispatch({
          type: actionTypes.ADD_USER_COMPLETE,
          payload: response
        });
        console.log(response);
      })
      .catch(error => {
        dispatch({
          payload: error
        });
      });
  };
};

// export const deleteUser = id => {
//   return dispatch => {
//     dispatch({ type: actionTypes.DELETE_USER_START });
//     Axios.delete(`http://localhost:3000/users/${id}`)
//       .then(response => {
//         dispatch({
//           type: actionTypes.DELETE_USER_COMPLETE,
//           payload: response
//         });
//       })
//       .catch(error => {
//         dispatch({
//           type: actionTypes.DELETE_USER_ERROR,
//           payload: error
//         });
//       });
//   };
// };

export const deleteUser = id => {
  const request = Axios.delete(`${apiEndPoint}/users/${id}`);
  return {
    type: actionTypes.DELETE_USER_COMPLETE,
    payload: request
  };
};
