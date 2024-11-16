import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthModalOpen: false,
  isCategoryDropOpen: false,
  isUserDropDownOpen: false,
  isSearchResultOpen: false,
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
      state.isSearchResultOpen = false;
    },
    open_category_modal: (state) => {
      state.isAuthModalOpen = false;
      state.isCategoryDropOpen = true;
      state.isUserDropDownOpen = false;
      state.isSearchResultOpen = false;
    },
    open_user_dropdown: (state) => {
      state.isAuthModalOpen = false;
      state.isCategoryDropOpen = false;
      state.isUserDropDownOpen = true;
      state.isSearchResultOpen = false;
    },
    open_search_result: (state) => {
      state.isAuthModalOpen = false;
      state.isCategoryDropOpen = false;
      state.isUserDropDownOpen = false;
      state.isSearchResultOpen = true;
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
