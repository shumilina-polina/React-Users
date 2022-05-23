import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type User = {
  name: string;
  address: {
    city: string;
  };
};

type UserState = {
  users: User[];
  error: string;
};

const initialState: UserState = {
  users: [{ name: "", address: { city: "" } }],
  error: "",
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    fetchUsersSuccess(state, action: PayloadAction<AxiosResponse<User[]>>) {
      state.users = action.payload.data;
    },
    fetchCryptoError(state, action: PayloadAction<AxiosResponse<User[]>>) {
      state.error = action.payload.statusText;
    },
  },
});

export default userSlice.reducer;
