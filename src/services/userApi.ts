import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserRegister} from "../types";
import { RootState } from "../store/store";

export interface LoginRequest {
 token: string
 expiration: string
}

export const userData = createApi({
  reducerPath: "userData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbix.somee.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<UserRegister, object>({
      query: (userInfo) => ({
        url: "api/Auth/Register",
        method: "POST",
        body: userInfo,
      }),
    }),
    loginUser: builder.mutation<LoginRequest, object>({
      query: (login) => ({
        url: "api/Auth/Login",
        method: "POST",
        body: login,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userData;
