import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { User } from "../../types/types";

type UserState = {
  users: User[];
  error: string;
};

const initialState: UserState = {
  users: [
    {
      id: "",
      name: "",
      address: { city: "" },
      email: "",
      phone: "",
    },
  ],
  error: "",
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    fetchUsersSuccess(state, action: PayloadAction<AxiosResponse<User[]>>) {
      state.users = action.payload.data;
    },
    fetchUsersError(state, action: PayloadAction<AxiosResponse<User[]>>) {
      state.error = action.payload.statusText;
    },
  },
});

export default userSlice.reducer;
