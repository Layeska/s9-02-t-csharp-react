import { useNavigate } from "react-router-dom";
import starts from "../../assets/svg/Vector.svg";
import heartWithoutLike from "../../assets/svg/heartLike.svg";
import heartWithLike from "../../assets/svg/heartfull.svg";
import { datosDelProveedor } from "../../features/proveedorSlice";
import { useAppDispatch } from "../../hooks/store";
import { useCategoriesOffersQuery } from "../../services/categoryApi";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useFavoritesQuery,
} from "../../services/perfilApi";
import Profesion from "../../types/index"


interface PropIdCategory {
  selectedId: number|  null ;
}
interface ofertas{
  oferta_Id: number| null
}
type PropIdOffer = number;


export default function Card({ selectedId }: PropIdCategory) {
  const { data } = useCategoriesOffersQuery(selectedId);

  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const { data: like } = useFavoritesQuery(null);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isOfferLiked = (ofertaId:unknown) => {
    return like?.some((oferta:ofertas) => oferta.oferta_Id === ofertaId);
  };
  
  const handleToggleFavorite = ({ ofertaId }: { ofertaId: PropIdOffer }) => {
    if (isOfferLiked(ofertaId)) {
      deleteFavorite(ofertaId);
    } else {
      addFavorite(ofertaId);
    }
  };
const handleData = ({id, oferta_Id}:{id:number, oferta_Id:number}) => {
  const payload:any = {  id,
    oferta_Id,
  }
  dispatch(datosDelProveedor(payload))
  navigate("/services")
}
  return (
    <>
      {data?.ofertas.map((profesion:Profesion) => (
        <div
          className="w-[328px] h-[423px] rounded-lg drop-shadow-md flex-col justify-start items-center"
          key={profesion.oferta_Id}
        >
          <img
            className="self-stretch grow shrink basis-0 w-[328px] h-[286px] cursor-pointer"
            src={`http://www.jobbix.somee.com/${profesion.imagen_Portada}`}
            onClick={handleData.bind(null,{id:data.categoria_Id,oferta_Id:profesion.oferta_Id}) as React.MouseEventHandler<HTMLImageElement>}
          />
          <div className="self-stretch h-[137px] px-6 py-4 bg-white flex-col justify-start items-start flex">
            <div className="self-stretch justify-start items-start gap-1 flex flex-col">
              <div className=" flex flex-row items-center justify-between">
                <h1 className="w-[226px] text-stone-950 text-lg font-medium">
                  {profesion.nombre}
                </h1>
                <div className="flex flex-row gap-x-1">
                  <h2 className="text-orange-300 text-lg font-medium pt-1">
                    {profesion.estrellas}
                  </h2>
                  <img className="" src={starts} alt={starts} />
                </div>
              </div>
              <div className="self-stretch text-zinc-800 text-[15px] font-normal">
                {profesion.subtitulo}
              </div>
              <div className="self-stretch text-neutral-500 text-[15px] font-normal">
                Desde USD ${profesion.precio_Base}
              </div>
              <span
                className="cursor-pointer"
                onClick={() => handleToggleFavorite({ ofertaId: profesion.oferta_Id })}
              >
                {isOfferLiked(profesion.oferta_Id) ? <img src={heartWithLike} alt={heartWithLike}/> : <img src={heartWithoutLike} alt={heartWithoutLike} />}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
