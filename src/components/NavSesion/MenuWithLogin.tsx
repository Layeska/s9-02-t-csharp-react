import { usePerfilInfoQuery } from "../../services/perfilApi";
import closeNav from "../../assets/Close 2.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type MenuWithLoginProps = {
  onClose: () => void;
};

export default function NavMenu({ onClose }: MenuWithLoginProps) {
  const { data } = usePerfilInfoQuery(null);
  const [clickedElement, setClickedElement] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    const storedElement = localStorage.getItem('clickedElement');
    if (storedElement) {
      setClickedElement(storedElement);
    }
  }, []);

  const handleOnClick = (path:string) => {
    setClickedElement(path);
    localStorage.setItem('clickedElement', path);
    navigate(path);
  };
  return (
    <>
      <div className="fixed z-10 left-0 top-0 h-full flex flex-col justify-start items-start bg-white w-[260px]">
        <div className="h-52 bg-gradient-to-l from-orange-300 to-stone-950 w-full">
          <div className="ml-[1rem] pt-4 text-white flex flex-col items-start gap-y-2 cursor-pointer">
            <img
              src={closeNav}
              className="w-[1.5rem] h-[1.5rem] mb-3 cursor-pointer"
              alt={closeNav}
              onClick={handleClose}
            />
            <img
              className="w-[76px] h-[76px] rounded-full"
              src={data?.foto}
              alt=""
              onClick={() => navigate("/profile")}
            />
            <p className="text-white text-sm font-medium leading-[18.05px]" onClick={() => navigate("/profile")}>
              {data?.nombres} {data?.apellidos}
            </p>
            <p className="text-white text-sm font-normal leading-[18.05px]" onClick={() => navigate("/profile")}>
              {data?.email}
            </p>
          </div>
        </div>
        <main className="flex flex-col items-start gap-y-7 mt-9 ml-4 text-[#000]">
      <p
        className={`transition-transform transform-gpu ${
          clickedElement === '/home' ? 'border-b-[3px] border-[#F9BC60] ring-[#F9BC60]' : ''
        } w-[2.5rem] h-[1.5rem] cursor-pointer`}
        onClick={() => handleOnClick('/home')}
      >
        Inicio
      </p>
      <p
        className={`transition-transform transform-gpu ${
          clickedElement === '/history' ? 'border-b-[3px] border-[#F9BC60] ring-[#F9BC60]' : ''
        } cursor-pointer`}
        onClick={() => handleOnClick('/history')}
      >
        Historial
      </p>
      <p
        className={`transition-transform transform-gpu ${
          clickedElement === '/favorite' ? 'border-b-[3px] border-[#F9BC60] ring-[#F9BC60]' : ''
        } cursor-pointer`}
        onClick={() => handleOnClick('/favorite')}
      >
        Favoritos
      </p>
      <p
        className={`transition-transform transform-gpu ${
          clickedElement === '/contact' ? 'border-b-[3px] border-[#F9BC60] ring-[#F9BC60]' : ''
        } cursor-pointer`}
        onClick={() => handleOnClick('/contact')}
      >
        Contacto
      </p>
      <p
        className={`transition-transform transform-gpu ${
          clickedElement === '/about' ? 'border-b-[3px] border-[#F9BC60] ring-[#F9BC60]' : ''
        } cursor-pointer`}
        onClick={() => handleOnClick('/about')}
      >
        Acerca de Jobbix
      </p>
    </main>
      </div>
    </>
  );
}
