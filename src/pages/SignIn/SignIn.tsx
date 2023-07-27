import Logo from "../../assets/img/Jobbix.png"
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center">
            <div className="mt-[70px] mb-10">
                <img src={Logo} alt="logo" className="w-[142px] h[48px]" />
            </div>

            <div className="w-full pl-4 pr-4">
                <h2 className="font-bold">Selecciona el tipo de cuenta</h2>

                <div className="w-full flex flex-col gap-4 mt-4">
                    <Link to="/Signin2" className="text-center w-full bg-primary p-2 rounded-[5px] font-medium">Cuenta personal</Link>
                    <Link to="#" className="text-center w-full border-[1px] border-[#F9BC60] p-2 rounded-[5px] font-medium">Ofrecer un servicio</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignIn
