import { PostType } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Prop = {
  currentPost: PostType;
};

const initialState: Prop = {
  currentPost: JSON.parse(localStorage.getItem("postClick") as string) || {
    id: "",
    title: "",
    body: "",
  },
};

export const postClickSlice = createSlice({
  name: "PostClick",
  initialState,
  reducers: {
    clickCurrentPost(state, action: PayloadAction<PostType>) {
      state.currentPost = action.payload;
    },
  },
});

export default postClickSlice.reducer;
