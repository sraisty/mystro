import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import polygonsReducer from "./polygonSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    polygons: polygonsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
