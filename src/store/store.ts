import { configureStore } from "@reduxjs/toolkit";
import { userData } from "../services/userApi";
import { categoryData } from "../services/categoryApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "../features/auth/auth.Slice"
import { perfilData } from "../services/perfilApi";
import proveedorReducer from "../features/proveedorSlice"
import { contratosData } from "../services/contratosApi";
import {ofertasData} from "../services/ofertaApi";

const persistanceMiddleware = (store:any) => (next:any) => (action:any) =>{
  next(action)
  localStorage.setItem("reduxstate", JSON.stringify(store.getState()))
 
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    proveedor: proveedorReducer,
    [userData.reducerPath]: userData.reducer,
    [categoryData.reducerPath]: categoryData.reducer,
    [perfilData.reducerPath]: perfilData.reducer,
    [contratosData.reducerPath]: contratosData.reducer,
    [ofertasData.reducerPath]: ofertasData.reducer
  },
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware()
      .concat([userData.middleware])
      .concat([categoryData.middleware])
      .concat([perfilData.middleware])
      .concat([contratosData.middleware])
      .concat([ofertasData.middleware])
      .concat([persistanceMiddleware])
      
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
