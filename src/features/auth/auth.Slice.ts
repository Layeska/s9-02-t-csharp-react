import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import jwt_decode from "jwt-decode";
import {mapDecodedTokenToUser} from "./token"
import { UserAccount } from "../../types";

const storedToken = localStorage.getItem("token");
const storedExpiration = localStorage.getItem("expiration");
type AuthState = {
  user: UserAccount | null;
  token: string | null;
  expiration: number | null
};
const convertExpirationToMiliseconds = (expiration: string):number =>{
  const expirationDate= new Date(expiration);
  return expirationDate.getTime();
}

const initialState: AuthState = {
  user: storedToken ? mapDecodedTokenToUser(jwt_decode(storedToken)) : null,
  token: storedToken,
  expiration: storedExpiration ? convertExpirationToMiliseconds(storedExpiration) : null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token, expiration } }: PayloadAction<{ token: string, expiration: string}>
    ) => {
      state.user = mapDecodedTokenToUser(jwt_decode(token));
      state.token = token;
      state.expiration = convertExpirationToMiliseconds(expiration)
      localStorage.setItem("token", token);
      localStorage.setItem("expiration", expiration);
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.expiration = null
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
    },
  },
});

export const { setCredentials,logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectTokenExpiration = (state: RootState) => state.auth.expiration


