import { useEffect, useState } from "react";
import menu from "../../assets/Nav Menu 1.svg";
import { useAppSelector } from "../../hooks/store";
import MenuWithLogin from "./MenuWithLogin";
import MenuWithoutLogin from "./MenuWithoutLogin";
import { useLocation } from "react-router-dom";


export default function NavHome() {
  const token = useAppSelector((state) => state.auth.token);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation()

  const handleMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    handleCloseMenu();
  }, [location]);

  return (
    <div className="flex flex-row">
      <div className="w-full h-16 bg-stone-950 bg-opacity-75  flex items-center">
        <img
          src={menu}
          className="w-6 h-6 cursor-pointer ml-4"
          alt=""
          onClick={handleMenu}
        />
        <div className="flex-grow flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Job</span>
          <span className="text-orange-300 text-2xl font-bold">bix</span>
        </div>
        {isMenuOpen && (
          <>
            {token ? (
              <MenuWithLogin onClose={handleCloseMenu} />
            ) : (
              <MenuWithoutLogin onClose={handleCloseMenu} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
