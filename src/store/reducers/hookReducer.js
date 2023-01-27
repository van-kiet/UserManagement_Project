import { DELETE_USER, SET_SELECTED_USER } from "../types/hookType";

const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      username: "man.nguyen",
      fullName: "Man Ng",
      password: "123",
      phoneNumber: "12345678",
      email: "man@gmail.com",
      type: "Client",
    },
    {
      id: 2,
      username: "khai.tran",
      fullName: "Khai Tran",
      password: "123",
      phoneNumber: "12345678",
      email: "khai@gmail.com",
      type: "Admin",
    },
  ],
  selectedUser: null,
};
export const hookReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_USER:
      state.selectedUser = payload;
      break;
    case DELETE_USER:
      state.userList = state.userList.filter((ele) =>
        ele.id === payload.id ? false : true
      );
      break;
    default:
      break;
  }
  return { ...state };
};
