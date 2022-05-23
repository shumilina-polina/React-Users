import axios from "axios";
import { AppDispatch } from "../store";
import { User, userSlice } from "./../slices/UserSlice";

export const fetchUser = () => {
  const base_url = process.env.REACT_APP_API_URL + "users";
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get<User[]>(base_url);
      if (res.status === 200) {
        dispatch(userSlice.actions.fetchUsersSuccess(res));
      } else {
        dispatch(userSlice.actions.fetchCryptoError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
