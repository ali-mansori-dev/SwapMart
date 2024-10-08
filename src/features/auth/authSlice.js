import { createSlice } from "@reduxjs/toolkit";
import { removeAccessToken, setAccessToken } from "../../utils/localStorage";

const initialState = {
  isAuthed: false,
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    log_in: (state, action) => {
      
      state.isAuthed = true;
      state.userInfo = action.payload.userInfo;
      state.userToken = action.payload.userToken;
      setAccessToken(action.payload.userToken);
      state.loading = false;
    },
    fetch_data: (state) => {
      state.loading = true;
    },
    log_out: (state) => {
      state.isAuthed = false;
      state.userInfo = {};
      state.userToken = null;
      removeAccessToken();
      state.loading = false;
    },
  },
});
export const { fetch_data, log_in, log_out } = authSlice.actions;
export default authSlice.reducer;
