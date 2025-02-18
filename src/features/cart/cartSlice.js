import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product_id === newItem?.product_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity ?? 1,
        });
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.cartItems.length;
    },
    decrease_qty: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cartItems.find((item) => item.product_id === productId);
      if (existingItem) {
        if (existingItem.quantity <= 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product_id !== productId
          );
        } else {
          existingItem.quantity -= 1;
        }
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.cartItems.length;
    },
    clear_cart: (state) => {
      state.items = [];
    },
  },
});
export const { add_to_cart, decrease_qty, clear_cart } = cartSlice.actions;
export default cartSlice.reducer;
