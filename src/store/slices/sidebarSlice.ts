import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISiderbarState {
  sidebarCollapsed: boolean;
}

const initialState: ISiderbarState = {
  sidebarCollapsed: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
  },
});
