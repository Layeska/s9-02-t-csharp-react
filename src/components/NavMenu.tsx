import { usePerfilInfoQuery } from "../services/perfilApi";
import profile from "../assets/profile.png";
import closeNav from "../assets/Close 1.png"
import { useState } from "react";

export default function NavMenu() {
  const { data } = usePerfilInfoQuery(null);
  const [openModal, setCloseModal] = useState<boolean>(false)

  const handleClose = () =>{
    setCloseModal(!openModal)
  }
  return (
    <div>
      {/* {openModal && ( */}
        <>
      <nav
        className="bg-gradient-to-r from-yellow-400 
        via-transparent to-opacity-75"
        key={data?.id}
      >
        <img src={closeNav} alt="" onClick={handleClose}/>
        <img className="white w-[4.75rem] h-[4.75rem]" src={profile} alt="" />
        <p>
          {data?.nombres} {data?.apellidos}
        </p>
        <p>{data?.email}</p>
      </nav>
      <main className="flex flex-col gap-y-2.5">
        <p>Inicio</p>
        <p>Historial</p>
        <p>Favoritos</p>
        <p>Contacto</p>
        <p>Acerca de Jobbix </p>
      </main>
      </>
      {/* )} */}
    </div>
  );
}
