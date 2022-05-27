import { CommentType } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

type CommentState = {
  comments: CommentType[];
  error: string;
};

const initialState: CommentState = {
  comments: [
    {
      id: "",
      name: "",
      email: "",
      body: "",
    },
  ],
  error: "",
};

export const commentSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    fetchCommentsSuccess(
      state,
      action: PayloadAction<AxiosResponse<CommentType[]>>
    ) {
      state.comments = action.payload.data;
    },
    fetchCommentsError(
      state,
      action: PayloadAction<AxiosResponse<CommentType[]>>
    ) {
      state.error = action.payload.statusText;
    },
    postComments(state, action: PayloadAction<CommentType>) {
      state.comments = [action.payload, ...state.comments];
      console.log(state.comments[0]);
    },
  },
});

export default commentSlice.reducer;
