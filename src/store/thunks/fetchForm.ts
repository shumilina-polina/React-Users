import { fetchComments } from "./fetchComments";
import { AppDispatch } from "./../store";
import axios from "axios";
import { commentSlice } from "../slices/CommentSlice";

type Args = { postId: string; name: string; email: string; body: string };

export const fetchForm = (sendData: Args) => {
  const base_url = process.env.REACT_APP_API_URL + "comments";
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.post<Args>(
        base_url,
        JSON.stringify({ ...sendData }),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      if (res.status === 201) {
        const myComment = {
          id: sendData.postId,
          name: sendData.name,
          email: sendData.email,
          body: sendData.body,
        };
        dispatch(commentSlice.actions.postComments(myComment));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
