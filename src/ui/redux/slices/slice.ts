// import { createSlice } from "@reduxjs/toolkit";
// import { UserInfo } from "../../models";
// import {
//   persistLocalStorage,
//   clearLocalStorage,
//   userKey,
// } from "../../utilities/managementLocalstorage";

// export const EmptyUserState: UserInfo = {
//   id: 0,
//   name: "",
//   email: "",
// };

// export const userSlice = createSlice({
//   initialState: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user") as string)
//     : EmptyUserState,
//   name: "user",
//   reducers: {
//     createUser: (_state, action) => {
//       persistLocalStorage<UserInfo>(userKey, action.payload);
//       return action.payload;
//     },
//     updateUser: (state, action) => {
//       const result = { ...state, ...action.payload };
//       persistLocalStorage<UserInfo>(userKey, result);
//       return result;
//     },
//     resetUser: (_state, _action) => {
//       clearLocalStorage(userKey);
//       return EmptyUserState;
//     },
//   },
// });

// export const { createUser, resetUser, updateUser } = userSlice.actions;

// export default userSlice.reducer;
