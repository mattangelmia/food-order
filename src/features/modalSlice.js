import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalDisplay: "none",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state) => {
      state.modalDisplay = "flex";
    },
    hideModal: (state) => {
      state.modalDisplay = "none";
    },
  },
});

export const { displayModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
