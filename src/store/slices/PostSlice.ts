import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { PostType } from "../../types/types";

type PostState = {
  posts: PostType[];
  error: string;
};

const initialState: PostState = {
  posts: [
    {
      id: "",
      title: "",
      body: "",
    },
  ],
  error: "",
};

export const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    fetchPostsSuccess(state, action: PayloadAction<AxiosResponse<PostType[]>>) {
      state.posts = action.payload.data;
    },
    fetchPostsError(state, action: PayloadAction<AxiosResponse<PostType[]>>) {
      state.error = action.payload.statusText;
    },
  },
});

export default postSlice.reducer;
