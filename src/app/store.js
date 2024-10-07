import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import layoutReducer from "../features/layout/layoutSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
  },
});
export default store;
