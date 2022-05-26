import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import userClickReducer from "./slices/UserClickSlice";
import postsReducer from "./slices/PostSlice";
import commentsReducer from "./slices/CommentSlice";
import postClickReducer from "./slices/PostClickSlice";
import modalReducer from "./slices/ModalSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

const rootReducer = combineReducers({
  userReducer,
  userClickReducer,
  postsReducer,
  commentsReducer,
  postClickReducer,
  modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
