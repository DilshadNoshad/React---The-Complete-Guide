import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = true;
    },
    isLogout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
