import Profile from "../assets/img/Profile1.png"
import { AiFillStar } from "react-icons/ai"
import { useHistorialQuery } from "../services/perfilApi"
import { useEffect } from "react"

const Historial = () => {
  const perfilData = useHistorialQuery(null);
  

  useEffect(() => {
    perfilData.refetch();
  }, []);

  const changeDate = (date: any) => {
    return date?.slice(0, 10);
  };

  return (
    <>
      <h1 className="text-center mt-[19px] text-xl font-medium">Historial</h1>

      <div className="flex flex-col justify-center items-center pl-4 pr-4 mt-3 gap-3">
        {perfilData.data?.length > 0 ? (
          perfilData.data?.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex gap-3 shadow-boxshadowHistory p-3 rounded-md"
            >
              <div>
                <img
                  src={Profile}
                  alt="profile image"
                  width={51}
                  height={51}
                  className="rounded-full"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-xl font-medium">{item.proveedor_Nombre}</p>
                  <div className="flex mt-[6px]">
                    <AiFillStar className="text-[#FFDD55]" />
                    <AiFillStar className="text-[#FFDD55]" />
                    <AiFillStar className="text-[#FFDD55]" />
                    <AiFillStar className="text-[#FFDD55]" />
                    <AiFillStar className="text-[#5F5F5F]" />
                  </div>
                </div>
                <div className="flex justify-between pl-2 pr-2">
                  {/*<p>{item.category}</p>*/}
                  <p>{changeDate(item.fecha_Solicitud)}</p>
                  <p className="text-lg">U$ {item.pago_Valor}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <aside>
            <div className="mt-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
              >
                <g clip-path="url(#clip0_525_1530)">
                  <path
                    d="M136.597 23.4106C105.387 -7.80226 54.6096 -7.80226 23.4058 23.403C-7.80396 54.6083 -7.80094 105.388 23.4089 136.599C54.6096 167.803 105.387 167.803 136.594 136.593C167.801 105.388 167.799 54.6113 136.597 23.4106ZM127.864 127.866C101.473 154.257 58.5289 154.26 32.1361 127.869C5.73869 101.473 5.74171 58.5246 32.1361 32.1332C58.5274 5.74341 101.47 5.74039 127.867 32.1363C154.258 58.5276 154.255 101.476 127.864 127.866ZM116.187 111.638C117.18 113.932 116.124 116.595 113.831 117.586C111.536 118.582 108.874 117.523 107.881 115.23C103.517 105.139 93.2025 98.617 81.5999 98.617C69.7302 98.617 59.3526 105.133 55.1663 115.218C54.4437 116.958 52.7586 118.01 50.986 118.01C50.4067 118.01 49.8198 117.898 49.2511 117.663C46.9429 116.704 45.8492 114.054 46.8072 111.748C52.404 98.273 66.0629 89.5669 81.5999 89.5669C96.8125 89.5669 110.39 98.2293 116.187 111.638ZM50.1457 58.339C50.1457 53.1736 54.335 48.9842 59.5005 48.9842C64.6644 48.9842 68.8538 53.1721 68.8538 58.339C68.8538 63.5075 64.6644 67.6953 59.5005 67.6953C54.335 67.6953 50.1457 63.5075 50.1457 58.339ZM92.5628 58.339C92.5628 53.1736 96.7552 48.9842 101.921 48.9842C107.085 48.9842 111.274 53.1721 111.274 58.339C111.274 63.5075 107.086 67.6953 101.921 67.6953C96.7552 67.6953 92.5628 63.5075 92.5628 58.339Z"
                    fill="#666666"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_525_1530">
                    <rect width="160" height="160" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="mt-5 font-semibold text-base">
              No se encontró historial
            </h2>
          </aside>
        )}
      </div>
    </>
  );
};

export default Historial
