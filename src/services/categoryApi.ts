import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryData = createApi({
  reducerPath: "categoryData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbix.somee.com/",
  }),
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => "/api/categorias",
    }),
    categoriesId: builder.query({
      query: (id) => `api/categorias/${id}`,
    }),
    categoriesOffers: builder.query({
      query: (id) => `api/categorias/${id}/ofertas`,
    }),
    categoriesOffersId: builder.query({
      query: ({ id, oferta_Id }) => `api/categorias/${id}/ofertas/${oferta_Id}`,
    }),
  }),
  })

export const {
  useCategoriesQuery,
  useCategoriesIdQuery,
  useCategoriesOffersQuery,
  useCategoriesOffersIdQuery,
} = categoryData;
