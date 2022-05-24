import axios from "axios";
import { PostType } from "../../types/types";
import { postSlice } from "../slices/PostSlice";
import { AppDispatch } from "../store";

export const fetchPosts = (id: string) => {
  const base_url = process.env.REACT_APP_API_URL + "posts?userId=" + id;
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get<PostType[]>(base_url);
      if (res.status === 200) {
        dispatch(postSlice.actions.fetchPostsSuccess(res));
      } else {
        dispatch(postSlice.actions.fetchPostsError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
