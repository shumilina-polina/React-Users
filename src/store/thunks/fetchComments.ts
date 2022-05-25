import { CommentType } from "./../../types/types";
import axios from "axios";
import { commentSlice } from "../slices/CommentSlice";
import { AppDispatch } from "../store";

export const fetchComments = (id: string) => {
  const base_url = process.env.REACT_APP_API_URL + "comments?postId=" + id;
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get<CommentType[]>(base_url);
      if (res.status === 200) {
        dispatch(commentSlice.actions.fetchCommentsSuccess(res));
      } else {
        dispatch(commentSlice.actions.fetchCommentsError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
