import * as types from "./actionTypes";
// import * as usersApi from "../../api/usersApi";
import usersApi from '../../api/usersApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";

// This is an Action Creator function, it creates an action meant to be sent to a reducer
export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}

export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}

export function deleteUserOptimistic(user) {
  return { type: types.DELETE_USER_OPTIMISTIC, user };
}

// This is a thunk!  It calls the api, then sends the response to a reducer?
export function loadUsers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return usersApi
      .fetchAllUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveUser(user) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return usersApi
      .saveUser(user)
      .then((savedUser) => {
        user.id
          ? dispatch(updateUserSuccess(savedUser))
          : dispatch(createUserSuccess(savedUser));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// export function deleteUser(user) {
//   return function (dispatch) {
//     dispatch(deleteUserOptimistic(user));
//     return usersApi.deleteUser(user.id);
//   };
// }
