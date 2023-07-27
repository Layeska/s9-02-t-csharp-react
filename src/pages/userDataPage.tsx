import { useEffect } from "react";
import { useAppSelector } from "../hooks/store";
import { useCategoriesOffersIdQuery } from "../services/categoryApi";
import { usePerfilInfoQuery } from "../services/perfilApi";


export default function UserDataPage(): JSX.Element {
  const proveedorData = useAppSelector((state) => state.proveedor)
  const id = proveedorData?.id;
  const oferta_Id = proveedorData?.oferta_Id;
  const { data:categories} = useCategoriesOffersIdQuery({
    id,
    oferta_Id,
  });
  
  const { data:user } = usePerfilInfoQuery(4);
  

  return (
    <form>
      <div className="flex flex-col items-center w-full">
        <h1 className="mt-5">Datos</h1>
        <div className="flex flex-row w-11/12 space-x-4 mt-5">
          <div className="flex flex-col w-full relative">
            <label className="absolute -top-3 bg-white ml-4" htmlFor="#">
              {user?.nombres}
            </label>
            <input className="border-2 h-12" type="text">
              {user?.nombres}
            </input>
          </div>
          <div className="flex flex-col w-full relative ">
            <label className="absolute -top-3 bg-white ml-4" htmlFor="#">
              Apellido
            </label>
            <input className="border-2 h-12" type="text">
              {user?.apellidos}
            </input>
          </div>
        </div>
        <div className="flex flex-col w-11/12 mt-5 mb-3 relative">
          <label className="absolute -top-3 bg-white ml-4" htmlFor="#">
            direccion
          </label>
          <input className="border-2 mb-5 h-12" type="text" > 
          {user?.direccion}
          </input>
        </div>
        
        <div className="flex flex-col w-11/12 relative mb-5">
          <label className="absolute -top-3 bg-white ml-4" htmlFor="#">
            celular
          </label>
          <input className="border-2 h-12" type="text">
            {user?.telefono}
          </input>
        </div>
        <div className="flex flex-col items-center w-11/12 ">
          <h2 className="mb-5">Fecha y horario</h2>
          <div className="flex flex-col w-full relative">
            <label className="absolute -top-3 bg-white ml-4" htmlFor="">
              indique los dias y horarios disponibles
            </label>
            <input className="border-2 w-full h-12" type="text" />
          </div>
          <h3 className="mt-5 mb-5">precio de la consulta</h3>
      
          <div className="border-2 rounded h-10 w-24 text-center mb-5">
            US$
          </div>
         
          <h4>metodo de pago</h4>
        </div>
        <div className="flex flex-start w-11/12">
          <ul className="mb-5 mt-5 ">
            <li>Efectivo</li>
            <li>Transferencia</li>
            <li>Tarjeta de credito</li>
          </ul>
        </div>
        <button className="border-2 w-11/12 h-10">continuar</button>
      </div>
    </form>
  );
}
