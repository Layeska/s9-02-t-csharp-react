import { useState } from "react";
import { FormEvent } from "react";
import Logo from "../../assets/img/Jobbix.png"
import { useRegisterUserMutation } from "../../services/userApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignIn2 = (): JSX.Element => {
  const [hiddenEmail, setHiddenEmail] = useState("");
  const [userData] = useRegisterUserMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    fields.username = hiddenEmail;
    userData(fields)
      .unwrap()
      .then((payload) => toast.success(payload.message))
      .catch((error) => toast.error(error.data.message));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHiddenEmail(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[70px] mb-10">
          <img src={Logo} alt="logo" className="w-[142px] h[48px]" />
        </div>

        <div className="w-full pl-4 pr-4">
          <form action="#" className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex mt-4 justify-between w-full">
              <div className="flex flex-col relative w-[48%]">
                <label htmlFor="#" className="absolute -top-3 bg-white ml-3 text-[#36343B]">
                  Nombre
                </label>
                <input
                  name="nombre"
                  type="text"
                  className="border-[#36343B] border-2 p-2 rounded-[4px]"
                />
              </div>
              <div className="flex flex-col relative w-[48%]">
                <label htmlFor="" className="absolute -top-3 bg-white ml-3 text-[#36343B]">
                  Apellido
                </label>
                <input
                  name="apellido"
                  type="text"
                  className="border-[#36343B] border-2 p-2 rounded-[4px]"
                />
              </div>
            </div>

            <div className="flex flex-col relative pt-2 pb-2 mt-6">
              <label htmlFor="" className="absolute -top-1 bg-white ml-3 text-[#36343B]">
                Email
              </label>
              <input
                name="email"
                type="text"
                className="border-[#49454F] border-2 p-2 rounded-[4px]"
                onChange={handleEmailChange}
              />
              <input type="hidden" name="username" value={hiddenEmail} />
            </div>

            <div className="flex mt-4 justify-between w-full pt-2 pb-2">
              <div className="flex flex-col relative w-[48%]">
                <label htmlFor="#" className="absolute -top-3 bg-white ml-3 text-[#36343B]">
                  Contraseña
                </label>
                <input
                  name="password"
                  type="text"
                  className="border-[#49454F] border-2 p-2 rounded-[4px]"
                />
              </div>

              <div className="flex flex-col relative w-[48%]">
                <label className="absolute -top-3 bg-white ml-3 text-[#36343B]">
                  Repetir contraseña
                </label>
                <input
                  name="confirmPassword"
                  type="text"
                  className="border-[#49454F] border-2 p-2 rounded-[4px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-10 gap-3">
              <button type="submit" className="bg-primary p-2 rounded-[5px] font-medium">Registrarse</button>
              <span className="font-['Inter'] text-[15px] mt-3">¿Ya tienes una cuenta? <Link to={"/login"} className="text-[#F9BC60] font-bold font-['Inter'] cursor-pointer">Iniciar Sesión</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn2;
