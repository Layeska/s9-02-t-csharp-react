import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const ofertasData = createApi({
  reducerPath: "ofertasData",
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
  tagTypes:["preguntas"],
  endpoints: (builder) => ({
    ofertasId: builder.query({
      query: (ofertaId) => `api/Ofertas/${ofertaId}`,
    }),
    ofertasIdPreguntas: builder.query({
      query: (ofertaId) => `api/ofertas/${ofertaId}/preguntas`,
      providesTags:["preguntas"]
    }),
    ofertasIdPreguntasPost: builder.mutation({
      query: ({ofertaId, ...pregunta}) => ({
        url: `api/ofertas/${ofertaId}/preguntas`,
        method: "POST",
        body:  pregunta ,
      }),
      invalidatesTags:["preguntas"]
    }),
  }),
});


export const {
useOfertasIdQuery,
useOfertasIdPreguntasQuery,
useOfertasIdPreguntasPostMutation
} = ofertasData