import Start from "../assets/svg/startFull.svg";

import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useFavoritesQuery,
} from "../services/perfilApi";
import heartWithoutLike from "../assets/svg/heartLike.svg";
import heartWithLike from "../assets/svg/heartfull.svg";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { ReactElement } from "react";
import { datosDelProveedor } from "../features/proveedorSlice";
import { useNavigate } from "react-router-dom";
import { useCategoriesOffersIdQuery } from "../services/categoryApi";

const Favorite = (): ReactElement => {
  const proveedorData = useAppSelector((state) => state.proveedor);
  const id = proveedorData?.id;
  const oferta_Id = proveedorData?.oferta_Id;
  useCategoriesOffersIdQuery({
    id,
    oferta_Id,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useFavoritesQuery(null);
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const [addFavorite] = useAddFavoriteMutation();
  const totalFavorites = data?.length;
  const isLike = (oferta_Id: number) =>
    data?.some((like: any) => like.oferta_Id === oferta_Id);

  const handleLike = (oferta_Id: number) => {
    if (isLike(oferta_Id)) {
      deleteFavorite(oferta_Id);
    } else {
      addFavorite(oferta_Id);
    }
  };
  const handleData = ({ id, oferta_Id }: { id: number; oferta_Id: number }) => {
    const payload: any = { id, oferta_Id };
    dispatch(datosDelProveedor(payload));
    navigate("/services");
  };
  if (totalFavorites === 0)
    return (
      <div className="text-center">No has elegido ningun favorito todavia</div>
    );

  return (
    <>
      <h1 className="mt-5 font-medium text-xl text-center font-['Inter']">
        Favoritos
      </h1>
      <div className="grid grid-cols-2 mr-4 ml-4 gap-2 mb-4">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full rounded-md shadow-boxshadowHistory mt-5"
          >
            <div className="cursor-pointer">
              <img
                src={`http://www.jobbix.somee.com/${item?.imagen}`}
                alt="imagen"
                onClick={() =>
                  handleData({
                    id: item.categoria_Id,
                    oferta_Id: item.oferta_Id,
                  })
                }
              />
              <div className="flex gap-3 p-2">
                <p className="w-[50] text-lg font-medium">
                  {item?.proveedor_Nombre}
                </p>
                <div className="flex gap-1 w-[50%] items-center">
                  <span className="text-lg font-medium text-[#F9BC60]">
                    {item?.estrellas}
                  </span>
                  <img src={Start} alt="" className="w-5 h-[18px]" />
                </div>
              </div>
            </div>
            <div className=" p-2 -mt-2 w-full">
              <span className="text-[#2B2B2B] text-[15px]">
                {item?.categoria_Nombre}
              </span>
              <p className="text-[#787878] text-[15px]">
                Desde USD ${item?.precio_Desde}
              </p>
              <span
                className="cursor-pointer"
                onClick={() => handleLike(item?.oferta_Id)}
              >
                {isLike(item?.oferta_Id) ? (
                  <img className="w-6 h-6 " src={heartWithLike} />
                ) : (
                  <img className="w-6 h-6 " src={heartWithoutLike} />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorite;
