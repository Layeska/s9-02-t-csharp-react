import Image from '../../assets/profile.png'
import { AiOutlineMenu } from "react-icons/ai"

const SignIn3 = () => {
  return (
    <>
      <div className="w-[360px] h-[64px] bg-[#D9D9D9] flex items-center p-4">
          <AiOutlineMenu />
          <p className="font-bold pl-36">LOGO</p>
      </div>
      <div className="">
            <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-[#4F4F4F] font-medium mt-2">Mi Perfil</p>
                <img src={Image} alt="" className="w-[139px] h[144px]" />
            </div>

            <div className="w-full pl-4 pr-4">
                <h2 className="font-bold">Datos</h2>
                <form action="#" className="flex flex-col">
                    <div className="flex mt-4 justify-between w-full">
                        <div className="flex flex-col relative w-[48%]">
                            <label htmlFor="#" className="absolute -top-3 bg-white ml-2">Nombre</label>
                            <input type="text" className="border-[#49454F] border-2 p-2" />
                        </div>
                        <div className="flex flex-col relative w-[48%]">
                            <label htmlFor="" className="absolute -top-3 bg-white ml-2">Apellido</label>
                            <input type="text" className="border-[#49454F] border-2 p-2" />
                        </div>
                    </div>

                    <div className="flex flex-col relative pt-2 pb-2 mt-6">
                        <label htmlFor="" className="absolute -top-1 bg-white ml-2">Email</label>
                        <input type="text" className="border-[#49454F] border-2 p-2" />
                    </div>

                    <div className="flex mt-4 justify-between w-full pt-2 pb-2">
                        <div className="flex flex-col relative w-[48%]">
                            <label htmlFor="#" className="absolute -top-3 bg-white ml-2">Contraseña</label>
                            <input type="text" className="border-[#49454F] border-2 p-2" />
                        </div>

                        <div className="flex flex-col relative w-[48%]">
                            <label htmlFor="" className="absolute -top-3 bg-white ml-2">Repetir contraseña</label>
                            <input type="text" className="border-[#49454F] border-2 p-2" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex flex-col w-full pl-4 pr-4 mt-2 gap-3">
                <button className="bg-[#D9D9D9] p-2 rounded-[5px] font-medium">Iniciar sesión</button>
            </div>
        </div>
    </>
  )
}

export default SignIn3