import { DELETE_USER, SET_SELECTED_USER } from "../types/hookType";

export const updateUserAction = (payload) => {
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
