import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import postsReducer from "../features/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
