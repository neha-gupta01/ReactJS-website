import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSuccessfulLogin(state, action) {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    handleSuccessfulSignUp(state, action) {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    handleLogout(state) {
      state.userData = {};
      state.isLoggedIn = false;
    },
  },
});

export const { handleSuccessfulLogin, handleSuccessfulSignUp, handleLogout } =
  userSlice.actions;

export default userSlice.reducer;
