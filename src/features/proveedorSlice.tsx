import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import ProveedorInfo from "../types/index";

const defaultInitialState = {
  id: 0,
  oferta_Id: 0,
  categoria: "",
  descripcion: "",
  imagen_Portada: "",
  precio_Base: 0,
  proveedor_Id: 0,
  proveedor_Nombre: "",
};

const initialState: ProveedorInfo | null = (() => {
  const persistedState = localStorage.getItem("reduxstate");
  if (persistedState) {
    try {
      return JSON.parse(persistedState).proveedor;
    } catch (error) {
      console.error("Error parsing persistedState JSON:", error);
    }
  }
  return defaultInitialState;
})();

export const proveedorSlice = createSlice({
  name: "proveedor",
  initialState,
  reducers: {
    datosDelProveedor: (state, action: PayloadAction<ProveedorInfo>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectCurrentProveedor = (state: RootState) => state.proveedor;
export const { datosDelProveedor } = proveedorSlice.actions;
export default proveedorSlice.reducer;
