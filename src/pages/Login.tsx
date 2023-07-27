import { AiOutlineCloseCircle } from "react-icons/ai";
import { useLoginUserMutation } from "../services/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/auth.Slice";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const dispatch = useDispatch();
  const [userData] = useLoginUserMutation();
  const navigate = useNavigate();
  const [isError, setIsError] = useState<string | null>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    userData(fields)
      .unwrap()
      .then((response) => {
        dispatch(
          setCredentials({
            token: response.token,
            expiration: response.expiration
          })
        );
       
        
        navigate("/home");
        toast.success("Bienvenido!");
      })
      .catch((error) => {
        if (error.data.error) {
          setIsError(error.data.error);
        } else if (error.data.errors) {
          setIsError(error.data.errors.Email || error.data.errors.Password);
        } else {
          setIsError("An error occurred");
        }
      });
  };
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-[70px]">
            <svg
              width="142"
              height="31"
              viewBox="0 0 142 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4 0.4V18.28C20.4 22 20.08 23.92 19.44 25.32C18.8 26.68 17.44 28.08 16.16 28.84C14.36 30 12.2 30.56 10.2 30.56C9.52 30.56 1.72 30.56 0.44 22.76C0.32 22.04 0.24 21.28 0.24 20.48H8.28C8.28 20.76 8.32 21.04 8.36 21.36C8.52 22.56 8.96 23.92 10.56 23.92C11.72 23.92 12.28 23.32 12.56 22.56C12.84 21.76 12.84 20.84 12.84 20.16V0.4H20.4ZM23.7038 18.88V18.84C23.7038 13.44 27.5838 7.08 35.6638 7.08C43.7438 7.08 47.6238 13.44 47.6238 18.88C47.6238 24.32 43.7438 30.68 35.6638 30.68C27.5838 30.68 23.7038 24.32 23.7038 18.88ZM30.3438 18.88V18.92C30.3438 22.12 32.7838 24.48 35.6638 24.48C38.5438 24.48 40.9838 22.12 40.9838 18.88C40.9838 15.64 38.5438 13.28 35.6638 13.28C32.7838 13.28 30.3438 15.64 30.3438 18.88ZM51.3844 30V0.4H58.0244V7.88V9.56C60.3844 7.04 63.5444 7.04 64.4644 7.04C69.1044 7.04 75.3844 10.36 75.3844 18.76C75.3844 26.76 69.8244 30.76 64.1844 30.76C61.0644 30.76 58.6644 29.24 57.7444 27.64V30H51.3844ZM68.7444 18.88V18.84C68.7444 16 66.5844 13.24 63.3044 13.24C59.7844 13.24 57.7844 16.08 57.7844 18.84C57.7844 21.92 59.8644 24.56 63.1844 24.56C66.5844 24.56 68.7444 21.8 68.7444 18.88Z"
                fill="#0D0D0D"
              />
              <path
                d="M79.1188 30V0.4H85.7588V7.88V9.56C88.1188 7.04 91.2788 7.04 92.1988 7.04C96.8388 7.04 103.119 10.36 103.119 18.76C103.119 26.76 97.5588 30.76 91.9188 30.76C88.7988 30.76 86.3988 29.24 85.4788 27.64V30H79.1188ZM96.4788 18.88V18.84C96.4788 16 94.3188 13.24 91.0388 13.24C87.5188 13.24 85.5188 16.08 85.5188 18.84C85.5188 21.92 87.5988 24.56 90.9188 24.56C94.3188 24.56 96.4788 21.8 96.4788 18.88ZM106.853 5.44V0.4H113.493V5.44H106.853ZM106.853 30V7.8H113.493V30H106.853ZM115.938 30L124.378 18.12L116.898 7.8H124.858L128.458 13.64L132.018 7.8H139.898L132.418 18.12L141.018 30H132.898L128.458 23.12L123.938 30H115.938Z"
                fill="#F9BC60"
              />
            </svg>
          </div>

          <div className="mt-10 flex flex-col items-center w-full p-4">
            <form
              action="#"
              className="flex flex-col w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col relative pt-2 pb-2 justify-center">
                <label
                  htmlFor=""
                  className="absolute -top-1 left-2 bg-white text-[#49454F]"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border-[#79747E] border-2 p-2 rounded-[4px] placeholder:text-[#1C1B1F]"
                  placeholder="Correo Electrónico"
                  name="email"
                />
                {isError && (
                  <>
                    <AiOutlineCloseCircle className="text-[#DE554D] absolute top-5 right-0 mr-2" />
                    <p className="text-[#DE554D] text-end pr-4">{isError}</p>
                  </>
                )}
              </div>

              <div className="flex flex-col relative pt-2 pb-2 mt-6">
                <label
                  htmlFor=""
                  className="absolute -top-1 left-2 bg-white text-[#49454F]"
                >
                  Contraseña
                </label>
                <input
                  type="text"
                  className="border-[#79747E] border-2 p-2 rounded-[4px]"
                  name="password"
                />
                {isError && (
                  <>
                    <AiOutlineCloseCircle className="text-[#DE554D] absolute top-5 right-0 mr-2" />
                    <p className="text-[#DE554D] text-end pr-4">{isError}</p>
                  </>
                )}
              </div>

              {/*<div className="mt-[23px]">
                <input type="checkbox" name="" id="" className="p-4  " />
                <label htmlFor="" className="ml-2">
                  Recuerdame
                </label>
              </div>*/}

              <div className="mt-10">
                <p className="font-medium">¿Olvidaste la contraseña?</p>
              </div>

              <div className="w-full mt-6">
                <button
                  className="bg-[#F9BC60] rounded-lg text-[#0D0D0D] p-2 w-full"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
                <button className="boder-[#F9BC60] border-2 rounded-lg p-2 w-full mt-4" onClick={() => navigate("/signin")}>Crear Cuenta
                </button>
              </div>
            </form>

            {/*<div className="mt-6 w-full">
              <p className="font-medium text-center pb-6">
                O iniciar sesión con:
              </p>

              <div className="flex gap-2 w-full">
                <button className="bg-[#4267B2] flex gap-2 items-center justify-center p-2 w-full text-white rounded-lg">
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80799 2.65602H8.31199V0.112024C7.58379 0.0363015 6.85211 -0.00108342 6.11999 2.38913e-05C3.94399 2.38913e-05 2.456 1.32802 2.456 3.76002V5.85602H0V8.70401H2.456V16H5.39999V8.70401H7.84799L8.21599 5.85602H5.39999V4.04002C5.39999 3.20002 5.62399 2.65602 6.80799 2.65602Z"
                      fill="white"
                    />
                  </svg>
                  Facebook
                </button>
                <button className="bg-[#FF4848] flex gap-2 justify-center item-center p-2 w-full text-white rounded-lg">
                  <img src={Google} alt="google logo" className="mt-1" />
                  Google
                </button>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
