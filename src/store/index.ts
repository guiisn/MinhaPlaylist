import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slicers/Videos";

export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});
