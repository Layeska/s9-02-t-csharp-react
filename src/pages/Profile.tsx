import Image from "../assets/img/Profileview.png"
import { useForm, SubmitHandler } from "react-hook-form"
import { useEditUserMutation, usePerfilInfoQuery } from "../services/perfilApi"
import toast from "react-hot-toast"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logOut } from "../features/auth/auth.Slice"
import ImageUpload from "../components/Images/ImageUpload"

type Inputs = {
    foto: string,
    nombres: string
    apellidos: string,
    direccion: string,
    provincia: string,
    pais: string,
    telefono: string,
}

const Profile = () => {
    const { register, handleSubmit } = useForm<Inputs>()
    const [ perfilData ] = useEditUserMutation()
    const dataProfileUser = usePerfilInfoQuery(1)
    const [ isDisabled, setIsDisabled ] = useState<boolean>(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const entrar = false
    const verificarImagen = localStorage.getItem("imagen")
    const imagenUp = localStorage.getItem("URL") || Image

    //! Obtener datos del perfil
    useEffect(() => {
        dataProfileUser.refetch()
    }, [dataProfileUser])

    //! Envia la data a la API
    const onSubmit: SubmitHandler<Inputs> = data => {
        //data.foto = imagenUp
        // data.foto = "https://i.postimg.cc/hjmpf6dK/1263b903-7489-4b12-940f-6fba35dad368.png"

        perfilData(data).then(() => {
            toast.success("¡Perfil actualizado!")
        }).catch(() => toast.error("Lo siento, ha ocurrido algo inesperado"))
        setIsDisabled(!isDisabled)
    }

    //! Salir de la sesión
    const logOutSesion = () => {
        dispatch(logOut())
        toast.success("¡Finalizaste sesión!")
        navigate("/home")
    }

    //! Volver al perfil no editable
    const clickChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsDisabled(entrar)
    }

    return (
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center gap-3">
                    { isDisabled ? <p className="font-medium mt-2 text-xl">Mi Perfil</p> : <p className="font-medium mt-2 text-xl">Editar Perfil</p> }

                    <div className="w-full flex justify-center items-center content-center relative">
                        <div className="w-full flex justify-center">
                            { verificarImagen === "true" ? <img src={imagenUp} alt="profile photo" className="w-[139px] h[144px] rounded-full" /> : <img src={dataProfileUser.data?.foto} alt="profile photo" className="w-[139px] h[144px] rounded-full" /> }
                        </div>
                        { !isDisabled ? <ImageUpload /> : null }
                    </div>
                </div>

                <div className="w-full pl-4 pr-4">
                    <h2 className="font-bold">Datos</h2>
                    <form action="#" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex mt-4 justify-between w-full">
                            <div className="flex flex-col relative w-[48%]">
                                <label htmlFor="#" className="absolute -top-4 bg-white ml-3 text-[#49454F]">Nombre</label>
                                <input type="text" className="border-[#79747E] border-[1.8px] p-2 placeholder:text-black" placeholder={dataProfileUser.data?.nombres} defaultValue="" {...register("nombres")} disabled={isDisabled} />
                            </div>
                            <div className="flex flex-col relative w-[48%]">
                                <label htmlFor="" className="absolute -top-4 bg-white ml-3 text-[#49454F]">Apellido</label>
                                <input type="text" className="border-[#79747E] border-2 p-2 placeholder:text-black" placeholder={dataProfileUser.data?.apellidos} defaultValue="" {...register("apellidos")} disabled={isDisabled} />
                            </div>
                        </div>

                        <div className="flex flex-col relative pt-2 pb-2 mt-6">
                            <label htmlFor="" className="absolute -top-2 bg-white ml-3 text-[#49454F]">Email</label>
                            <input type="text" className="border-[#79747E] border-2 p-2 placeholder:text-black" placeholder={dataProfileUser.data?.email} defaultValue="" disabled={true} />
                        </div>

                        <div className="flex flex-col relative pt-2 pb-2 mt-6">
                            <label htmlFor="" className="absolute -top-2 bg-white ml-3 text-[#49454F]">Dirección</label>
                            <input type="text" className="border-[#79747E] border-2 p-2 placeholder:text-black" placeholder={dataProfileUser.data?.direccion} defaultValue="" disabled={isDisabled} {...register("direccion")} />
                        </div>

                        <div className="flex mt-4 justify-between w-full pt-2 pb-2">
                            <div className="flex flex-col relative w-[48%]">
                                <label htmlFor="#" className="absolute -top-4 bg-white ml-3 text-[#49454F]">Provincia</label>
                                <input type="text" className="border-[#79747E] border-2 p-2 placeholder:text-black" placeholder={dataProfileUser.data?.provincia} defaultValue="" {...register("provincia")} disabled={isDisabled} />
                            </div>

                            <div className="flex flex-col relative w-[48%]">
                                <label htmlFor="" className="absolute -top-4 bg-white ml-3 text-[#49454F]">País</label>
                                <input type="text" className="border-[#79747E] border-2 p-2 placeholder:text-black" placeholder={dataProfileUser.data?.pais} defaultValue="" {...register("pais")} disabled={isDisabled} />
                            </div>
                        </div>

                        <div className="flex flex-col relative pt-2 pb-2 mt-4">
                            <label htmlFor="" className="absolut -top-2 bg-white ml-3 text-[#49454F]">Celular</label>
                            <input type="text" className="border-[#79747E] border-2 p-2 placeholder:text-black" placeholder={dataProfileUser.data?.telefono} defaultValue="" {...register("telefono")} disabled={isDisabled} />
                        </div>

                        <div className="flex flex-col w-full mt-4 gap-3">
                            {
                                isDisabled ? (
                                    <>
                                        <button className="bg-primary p-2 rounded-[5px] font-medium" onClick={clickChange} type="button">Editar</button>
                                        <button className="border-2 border-[#F9BC60] p-2 rounded-[5px] font-medium" onClick={logOutSesion} type="button">CERRAR SESIÓN</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="bg-primary p-2 rounded-[5px] font-medium" type="submit">Guardar Cambios</button>
                                        <button className="border-2 border-[#F9BC60] p-2 rounded-[5px] font-medium" onClick={() => setIsDisabled(!isDisabled)} type="button">Volver a mi perfil</button>
                                    </>
                                )
                            }
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Profile
