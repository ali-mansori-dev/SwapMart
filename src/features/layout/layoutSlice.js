import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthModalOpen: false,
  isCategoryDropOpen: false,
  isUserDropDownOpen: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    open_auth_modal: (state) => {
      state.isAuthModalOpen = true;
      state.isCategoryDropOpen = false;
      state.isUserDropDownOpen = false;
    },
    close_all: (state) => {
      state.isAuthModalOpen = false;
      state.isCategoryDropOpen = false;
      state.isUserDropDownOpen = false;
    },
    open_category_modal: (state) => {
      state.isAuthModalOpen = false;
      state.isCategoryDropOpen = true;
      state.isUserDropDownOpen = false;
    },
    open_user_dropdown: (state) => {
      state.isAuthModalOpen = false;
      state.isCategoryDropOpen = false;
      state.isUserDropDownOpen = true;
    },
  },
});
export const {
  open_auth_modal,
  close_all,
  open_category_modal,
  open_user_dropdown,
} = layoutSlice.actions;
export default layoutSlice.reducer;
