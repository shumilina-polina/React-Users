import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = { active: boolean };

const initialState: ModalType = {
  active: JSON.parse(localStorage.getItem("modal-active") as string) || false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<boolean>) {
      state.active = action.payload;
    },
  },
});

export default modalSlice.reducer;
