import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const contratosData = createApi({
  reducerPath: "contratosData",
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
  endpoints: (builder) => ({
    contratoInfo: builder.query({
      query: () => "api/Contratos",
    }),
    proveedorContract: builder.mutation({
      query: (oferta_Id) => ({
        url: "api/Contratos",
        method: "POST",
        body: {oferta_Id},
      }),
    }),
    contractId: builder.query({
      query: (id) => `api/contratos/${id}`,
    }),
    contratoResena: builder.mutation({
      query: (contrato_id) => ({
        url: `api/Contratos/${contrato_id}/resena`,
        method: "POST",
        body: { contrato_id },
      }),
    }),
  }),
});

export const {
  useContractIdQuery,
  useContratoInfoQuery,
  useProveedorContractMutation,
  useContratoResenaMutation,
} = contratosData;
