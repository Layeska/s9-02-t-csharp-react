import closeNav from "../../assets/Close 1.png";
import { useNavigate } from "react-router-dom";

type MenuWithLoginProps = {
  onClose: () => void;
};
export default function NavMenu({ onClose }: MenuWithLoginProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <div className="fixed z-10 left-0 top-0 h-full flex flex-col justify-start items-start bg-white w-[260px]">
        <div className="ml-[1rem] pt-[1rem] flex flex-col">
          <img
            src={closeNav}
            className="w-[1.5rem] h-[1.5rem] mb-4 cursor-pointer"
            alt={closeNav}
            onClick={handleClose}
          />

          <main className="flex flex-col items-start gap-y-9 mt-9 text-[#000]">
            <p className="border-b-[3px] border-[#F9BC60] w-[2.5rem] h-[1.5rem] cursor-pointer" onClick={()=>navigate("/home")}>
              Inicio
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/contact")}>
              Contacto
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/about")}>
              Acerca de Jobbix
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </p>

            <p className="cursor-pointer" onClick={() => navigate("signin2")}>
              Registro
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
