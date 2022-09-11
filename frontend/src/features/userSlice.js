import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: JSON.parse(localStorage.getItem("user")),
    isPending: false,
    isErrors: false,
  },
  reducers: {
    start: (state) => {
      state.isPending = true;
      state.isErrors = false;
    },
    success: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isPending = false;
    },
    logoutSucess: (state) => {
      state.isPending = false;
      state.userInfo = null;
      localStorage.clear();
    },
    errors: (state) => {
      state.isPending = false;
      state.isErrors = true;
    },
  },
});

export const { start, success, errors, logoutSucess, registersuccess } =
  userSlice.actions;

export const selectUser = (state) => state.user.userInfo;
export const UserState = (state) => state.user;
export default userSlice.reducer;
