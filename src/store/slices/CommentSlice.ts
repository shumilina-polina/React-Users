import { CommentType } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { PostType } from "../../types/types";

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
  },
});

export default commentSlice.reducer;
