import { useNavigate } from "react-router-dom"
import DataPDF from "../../features/PDF/DataPDF"
import Check from "../../assets/svg/check.svg"
import { PDFDownloadLink } from '@react-pdf/renderer'
import { usePerfilInfoQuery } from "../../services/perfilApi"

const Comprobante = ()  => {
    const navigate = useNavigate()
    const { data } = usePerfilInfoQuery(null)

    return (
        <>
            <h1 className="font-medium text-xl text-center mt-5 font-['Inter']">Comprobante</h1>

            <div className="w-full flex flex-col justify-center items-center mt-6">
                <img src={Check} alt="" />
                <span className="mt-6 font-['Inter'] font-bold">¡Tu pago fue realizado con éxito!</span>
            </div>

            <div className="border-[1px] border-black ml-4 mr-4 mt-5 p-5 font-['Inter'] flex flex-col gap-4 rounded-xl">
                <div className="flex gap-1">
                    <p className="font-bold">Nombre usuario: </p>
                    <span>{data?.nombres} {data?.apellidos}</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold">Categoría:</p>
                    <span>Plomería</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold">Contrató a:</p>
                    <span>Mauricio Aguilar</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold">Fecha: </p>
                    <span>Lunes - 8pm</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold">Método de pago: </p>
                    <span>Tarjeta de crédito</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold">Pagó: </p>
                    <span>USD $50</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold">N° de transacción: </p>
                    <span>182567-P</span>
                </div>
            </div>

            <div className="ml-4 mr-4 mt-10">
                <PDFDownloadLink document={<DataPDF nombre={data?.nombres} apellido={data?.apellidos} />} fileName="comprobantePago">
                    <button className="w-full bg-primary p-2 rounded-md font-['Roboto'] text-sm">Descargar</button>
                </PDFDownloadLink>
                <button className="w-full bg-[#D9D9D9] p-2 rounded-md font-['Roboto'] text-sm mt-2" onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
        </>
    )
}

export default Comprobante
