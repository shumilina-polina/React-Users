import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

type Prop = {
  user: User;
};

const initialState: Prop = {
  user: {
    id: "",
    name: "",
    address: { city: "" },
    email: "",
    phone: "",
  },
};

export const userClickSlice = createSlice({
  name: "UserClick",
  initialState,
  reducers: {
    clickCurrentUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export default userClickSlice.reducer;
