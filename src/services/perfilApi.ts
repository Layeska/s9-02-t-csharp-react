import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const perfilData = createApi({
  reducerPath: "perfilData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbix.somee.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes:["Like"],
  endpoints: (builder) => ({
    perfilInfo: builder.query({
      query: () => "api/Me/perfil",
    }),
    editUser: builder.mutation({
      query: (userInfo) => ({
        url: "api/Me/perfil",
        method: "PATCH",
        body: userInfo,
      }),
    }),
    favorites: builder.query({
      query: () => "api/Me/Favorites",
      providesTags: ['Like'],
     
    }),
    addFavorite: builder.mutation({
      query: (oferta_Id) => ({
        url: "api/Me/Favorites",
        method: "POST",
        body: {oferta_Id},
      }),
      invalidatesTags:["Like"]
    }),
    deleteFavorite: builder.mutation({
      query: (oferta_Id) => ({
        url: "api/Me/Favorites",
        method: "DELETE",
        body: {oferta_Id},
      }),
      invalidatesTags:["Like"]
      
    }),
    historial: builder.query({
      query: () => "api/Me/Historial",
    }),
  }),
});

export const {
  usePerfilInfoQuery,
  useEditUserMutation,
  useFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useHistorialQuery,
} = perfilData;
