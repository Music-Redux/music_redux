/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";
import reviewReducer from "./fromDB/reviewSlice";
import userReducer from "./fromDB/userSlice";
import postReducer from "./fromDB/postSlice";
import commentReducer from "./fromDB/commentSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    Reviews: reviewReducer,
    Users: userReducer,
    Posts: postReducer,
    Comments: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
