import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import layoutReducer from "../features/layout/layoutSlice";
import cartReducer from "../features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    layout: layoutReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);

export default store;
