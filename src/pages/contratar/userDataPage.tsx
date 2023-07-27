import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/store";
import { usePerfilInfoQuery } from "../../services/perfilApi"

export default function UserDataPage(): JSX.Element {
  const proveedorData = useAppSelector((state) => state.proveedor);
  const navigate = useNavigate();

  const { data } = usePerfilInfoQuery(null)

  const handleClic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate("/revisar")
  }

  return (
    <form>
      <div className="flex flex-col items-center w-full">
        <h1 className="mt-5 font-medium text-xl">Datos</h1>
        <div className="flex mt-4 justify-between w-full pl-[16px] pr-[17px]">
          <div className="flex flex-col relative w-[48%]">
            <label
              htmlFor="#"
              className="absolute -top-4 bg-white ml-3 text-[#49454F]"
            >
              Nombre
            </label>
            <input
              type="text"
              className="border-[#79747E] border-[1.8px] p-2"
              name="nombres"
              placeholder={data?.nombres}
              disabled={true}
            />
          </div>
          <div className="flex flex-col relative w-[48%]">
            <label
              htmlFor=""
              className="absolute -top-4 bg-white ml-3 text-[#49454F]"
            >
              Apellido
            </label>
            <input type="text" className="border-[#79747E] border-2 p-2" placeholder={data?.apellidos} disabled={true} />
          </div>
        </div>
        <div className="flex flex-col w-11/12 mt-5 mb-3 relative">
          <label
            className="absolute -top-3 bg-white ml-4 text-[#49454F]"
            htmlFor="#"
          >
            Dirección
          </label>
          <input
            className="border-[#79747E] border-[1.8px] mb-5 h-12 p-2"
            type="text"
            placeholder={data?.direccion}
            disabled={true}
          />
        </div>
        <div className="flex flex-col w-11/12 relative mb-5">
          <label
            className="absolute -top-3 bg-white ml-4 text-[#49454F]"
            htmlFor="#"
          >
            Celular
          </label>
          <input className="border-[#79747E] border-[1.8px] h-12 p-2" type="text" placeholder={data?.telefono} disabled={true} />
        </div>
        <div className="flex flex-col items-center w-11/12 ">
          <h2 className="mb-6 font-bold text-lg">Fecha y Horario</h2>
          <div className="flex flex-col w-full relative">
            <label
              className="absolute -top-3 bg-white ml-4 text-[#49454F]"
              htmlFor=""
            >
              Indique los dias y horarios disponibles
            </label>
            <input className="border-[#79747E] border-[1.8px] w-full h-12 p-2" type="text" />
          </div>
          <h3 className="mt-5 mb-[10px] font-bold text-lg">
            Precio de la Consulta
          </h3>
          <div className="rounded-[5px] p-2 text-center bg-[#D9D9D9] h-[45px] w-[160px] font-normal text-lg">
            US${proveedorData?.precio_Base}
          </div>
          <h4 className="font-bold text-lg mt-[18px]">Método de pago</h4>
        </div>
        <div className="flex flex-start w-11/12">
          <ul className="mb-5 mt-5 ">
            <li>
              <input type="radio" />
              <label htmlFor="#" className="ml-2">
                Efectivo
              </label>
            </li>
            <li>
              <input type="radio" defaultChecked />
              <label htmlFor="#" className="ml-2">
                Tarjeta de crédito
              </label>
            </li>
          </ul>
        </div>
        <button
          className="w-11/12 h-10 bg-primary rounded-md text-base"
          type="button"
          onClick={e => handleClic(e)}
        >
          Continuar
        </button>
      </div>
    </form>
  );
}
