import { IUser } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTokenFromCookie } from "@utils/auth";

export interface IUserState {
  userInfo: IUser;
  token: string;
}

const initialState: IUserState = {
  userInfo: null,
  token: getTokenFromCookie(),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload;
    },
  },
});
