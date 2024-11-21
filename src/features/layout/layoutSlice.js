import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_auth_modal_open: false,
  is_category_drop_open: false,
  is_user_drop_down_open: false,
  is_search_result_open: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    open_auth_modal: (state) => {
      state.is_auth_modal_open = true;
      state.is_category_drop_open = false;
      state.is_user_drop_down_open = false;
      state.is_search_result_open = false;
    },
    close_all: (state) => {
      state.is_auth_modal_open = false;
      state.is_category_drop_open = false;
      state.is_user_drop_down_open = false;
      state.is_search_result_open = false;
    },
    open_category_modal: (state) => {
      state.is_auth_modal_open = false;
      state.is_category_drop_open = true;
      state.is_user_drop_down_open = false;
      state.is_search_result_open = false;
    },
    open_user_dropdown: (state) => {
      state.is_auth_modal_open = false;
      state.is_category_drop_open = false;
      state.is_user_drop_down_open = true;
      state.is_search_result_open = false;
    },
    open_search_result: (state) => {
      state.is_auth_modal_open = false;
      state.is_category_drop_open = false;
      state.is_user_drop_down_open = false;
      state.is_search_result_open = true;
    },
  },
});
export const {
  open_auth_modal,
  close_all,
  open_category_modal,
  open_user_dropdown,
  open_search_result,
} = layoutSlice.actions;
export default layoutSlice.reducer;
