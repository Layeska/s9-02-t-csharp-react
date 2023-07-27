import { useNavigate } from "react-router-dom";
import proveedorPicture from "../../assets/Rectangle 266.png";
import testingImg from "../../assets/testingImg.svg";
import heartWithoutLike from "../../assets/svg/heartLike.svg";
import heartWithLike from "../../assets/svg/heartfull.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useCategoriesOffersIdQuery } from "../../services/categoryApi";
import { useProveedorContractMutation } from "../../services/contratosApi";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useFavoritesQuery,
} from "../../services/perfilApi";
import { datosDelProveedor } from "../../features/proveedorSlice";

export default function ProviderInfo() {
  const proveedorData = useAppSelector((state) => state.proveedor);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = proveedorData?.id;
  const oferta_Id = proveedorData?.oferta_Id;
  const { data,} = useCategoriesOffersIdQuery({
    id,
    oferta_Id,
  });
  
  const { data: like } = useFavoritesQuery(null);
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const [addFavorite] = useAddFavoriteMutation();
  const [contract] = useProveedorContractMutation();

  const isLike = like?.some(
    (favorite: any) => favorite.oferta_Id === oferta_Id
  );
  const handleToggleFavorite = () => {
    if (isLike) {
      deleteFavorite(oferta_Id);
    } else {
      addFavorite(oferta_Id);
    }
  };

  const handleContractClick = (id: number) => {
    contract(id);
    dispatch(datosDelProveedor(data));
    navigate("/userData");
  };

  return (
    <div className="flex flex-col items-center mt-4 ">
      <div className="flex flex-row items-center w-[360px]">
        <img className="w-10 h-10 mr-4" src={testingImg} alt={testingImg} />

        <p className="w-fit h-6 text-black text-opacity-90 text-xl font-medium ">
          {data?.proveedor_Nombre}
        </p>
      </div>
      <div className="flex justify-end w-[325px] mt-6">
        <span className="cursor-pointer" onClick={handleToggleFavorite}>
          {isLike ? (
            <img className="w-6 h-6" src={heartWithLike} alt={heartWithLike} />
          ) : (
            <img
              className="w-6 h-6"
              src={heartWithoutLike}
              alt={heartWithoutLike}
            />
          )}
        </span>
      </div>
      <img
        className="w-[328px] h-[194px]"
        src={proveedorPicture}
        alt={proveedorPicture}
      />
      <div className="flex flex-row gap-x-1 mt-2">
        <button className="w-40 h-[45px] bg-zinc-300 rounded-[5px] ">
          {data?.categoria}
        </button>
        <button className="w-40 h-[45px] bg-orange-300 rounded-[5px] ">
          USD ${data?.precio_Base}
        </button>
      </div>
      <div className="mt-[17px] ">
        <h2 className="text-black text-lg font-bold leading-7 mb-[6px]">
          Descripcion
        </h2>
        <p className="w-[326px] text-justify text-black text-base font-normal">
          {data?.descripcion}
        </p>
        <button
          onClick={() => handleContractClick(data?.oferta_Id)}
          className="w-[328px] h-10 bg-orange-300 rounded-[5px] mt-[12px]"
        >
          CONTRATAR
        </button>
      </div>
    </div>
  );
}
