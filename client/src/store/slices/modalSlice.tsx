import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openOrCloseModal: (state) => {
      if (!state.isOpen) state.isOpen = true;
      else state.isOpen = false;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openOrCloseModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
