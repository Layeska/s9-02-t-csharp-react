import { useNavigate } from "react-router-dom"
import { usePerfilInfoQuery } from "../../services/perfilApi"

const Revision = () => {
    const navigate = useNavigate()
    const { data } = usePerfilInfoQuery(null)

    return (
        <>
            <div className="w-full pl-[21px] pr-[21px] mt-5">
                <h1 className="text-xl font-medium text-center">Revisión</h1>

                <div className="flex flex-col gap-2 mt-6 ">
                    <h2 className="text-lg font-medium">Datos del Usuario</h2>
                    <p>{data?.nombres} {data?.apellidos}</p>
                    <p>{data?.direccion} </p>
                    <p>{data?.telefono}</p>
                    <p>Lunes - 8pm</p>
                    <p>$20</p>
                </div>

                <div className="flex flex-col gap-2 mt-6 ">
                    <h2 className="text-lg font-medium">Datos de tarjeta</h2>
                    <p>{data?.nombres}</p>
                    <p>Visa</p>
                    <p>4000 1234 5678 9010</p>
                </div>

                <button className="mt-4 bg-primary font-medium p-1 w-full rounded-md" onClick={() => navigate("/comprobar")}>Confirmar pago</button>
            </div>
        </>
    )
}

export default Revision
