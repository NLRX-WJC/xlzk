import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slices/sidebarSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
