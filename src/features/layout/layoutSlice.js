import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_auth_modal_open: false,
  is_category_drop_open: false,
  is_user_drop_down_open: false,
  is_search_result_open: false,
  is_category_modal_component: false,
  is_cart_modal_open: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    resetAll: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = false;
      });
    },

    // Open a specific layout component
    openLayout: (state, action) => {
      layoutSlice.caseReducers.resetAll(state); // Reset all other states
      const { payload } = action;
      if (payload && state.hasOwnProperty(payload)) {
        state[payload] = true;
      }
    },
  },
});
export const { openLayout, resetAll } = layoutSlice.actions;
export default layoutSlice.reducer;
