import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import userClickReducer from "./slices/UserClickSlice";
import postsReducer from "./slices/PostSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

const rootReducer = combineReducers({
  userReducer,
  userClickReducer,
  postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
