import {
  ADD_USER,
  DELETE_USER,
  SET_SELECTED_USER,
  UPDATE_USER,
} from "../types/hookType";

export const setSelectedUserAction = (payload) => {
  return {
    type: SET_SELECTED_USER,
    payload,
  };
};
export const deleteUserAction = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
export const addUserAction = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};
export const updateUserAction = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};
