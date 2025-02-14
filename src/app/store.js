import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import layoutReducer from "../features/layout/layoutSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    cart: cartReducer,
  },
});
export default store;
