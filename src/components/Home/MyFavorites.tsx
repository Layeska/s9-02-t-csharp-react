import backLeft from "../../assets/svg/Arrow left 1.svg";
import nextRight from "../../assets/svg/Arrow right 1.svg";
import {
  useDeleteFavoriteMutation,
  useFavoritesQuery,
} from "../../services/perfilApi";
import starts from "../../assets/svg/Vector.svg";
import heartWithoutLike from "../../assets/svg/heartLike.svg";
import heartWithLike from "../../assets/svg/heartfull.svg";
import Proveedor from "../../types/index";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useCategoriesOffersIdQuery } from "../../services/categoryApi";
import { datosDelProveedor } from "../../features/proveedorSlice";
import { useNavigate } from "react-router-dom";

export default function MyFavorites() {
  const { data } = useFavoritesQuery(null);
  const proveedorData = useAppSelector((state) => state.proveedor);
  const id = proveedorData?.id;
  const oferta_Id = proveedorData?.oferta_Id;
  useCategoriesOffersIdQuery({
    id,
    oferta_Id,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const [currentPage, setCurrentPage] = useState(0);
  const isFirstPage = currentPage === 0;

  const totalArray = data?.length;
  const isLastPage = currentPage === totalArray - 1;
  const isLike = data?.filter((like: any) => like.oferta_Id);
  if (totalArray === 0)
    return (
      <p className="text-center">No has elegido ningun favorito todavia</p>
    );
  const filteredPage = () => {
    return data?.slice(currentPage, currentPage + 1);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleDeleteFavorite = (id: number) => {
    deleteFavorite(id);
  };
  const handleData = ({ id, oferta_Id }: { id: number; oferta_Id: number }) => {
    const payload: any = { id, oferta_Id };
    dispatch(datosDelProveedor(payload));
    navigate("/services");
  };
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="flex flex-row justify-between w-[328px] mb-6">
        <h1
          className=" text-black text-2xl font-medium leading-7 cursor-pointer"
          onClick={() => navigate("/favorite")}
        >
          Mis favoritos
        </h1>
        <div className="flex flex-row gap-x-4">
          <button disabled={isFirstPage} onClick={handlePreviousPage}>
            <img
              className="bg-[#F9BC60] cursor-pointer"
              src={backLeft}
              alt={backLeft}
            />
          </button>
          <button disabled={isLastPage} onClick={handleNextPage}>
            <img
              className="bg-[#F9BC60] cursor-pointer"
              src={nextRight}
              alt={nextRight}
            />
          </button>
        </div>
      </div>
      <>
        {filteredPage()?.map((proffesion: Proveedor) => (
          <div
            className="w-[328px] h-[423px] rounded-lg drop-shadow-md flex-col justify-start items-center"
            key={proffesion.oferta_Id}
          >
            <img
              className="self-stretch grow shrink basis-0 w-[328px] h-[286px] cursor-pointer"
              src={
                "http://www.jobbix.somee.com/providers/images/placeholder_provider.png"
              }
              onClick={() =>
                handleData({
                  id: proffesion.categoria_Id,
                  oferta_Id: proffesion.oferta_Id,
                })
              }
            />
            <div className="self-stretch h-[137px] px-6 py-4 bg-white flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-start gap-1 flex flex-col">
                <div className=" flex flex-row items-center justify-between">
                  <h1 className="w-[226px] text-stone-950 text-lg font-medium">
                    {proffesion.proveedor_Nombre}
                  </h1>
                  <div className="flex flex-row gap-x-1">
                    <h2 className="text-orange-300 text-lg font-medium pt-1">
                      {proffesion.estrellas}
                    </h2>
                    <img className="" src={starts} alt={starts} />
                  </div>
                </div>
                <div className="self-stretch text-zinc-800 text-[15px] font-normal">
                  {proffesion.subtitulo}
                </div>
                <div className="self-stretch text-neutral-500 text-[15px] font-normal">
                  Desde USD ${proffesion.precio_Desde}
                </div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleDeleteFavorite(proffesion.oferta_Id)}
                >
                  {isLike ? (
                    <img src={heartWithLike} alt={heartWithLike} />
                  ) : (
                    <img src={heartWithoutLike} alt={heartWithoutLike} />
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
