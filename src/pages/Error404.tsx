import { useNavigate } from "react-router-dom"

const Error404 = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="mt-6 flex flex-col justify-center items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
                        <g clip-path="url(#clip0_525_1530)">
                            <path d="M136.597 23.4106C105.387 -7.80226 54.6096 -7.80226 23.4058 23.403C-7.80396 54.6083 -7.80094 105.388 23.4089 136.599C54.6096 167.803 105.387 167.803 136.594 136.593C167.801 105.388 167.799 54.6113 136.597 23.4106ZM127.864 127.866C101.473 154.257 58.5289 154.26 32.1361 127.869C5.73869 101.473 5.74171 58.5246 32.1361 32.1332C58.5274 5.74341 101.47 5.74039 127.867 32.1363C154.258 58.5276 154.255 101.476 127.864 127.866ZM116.187 111.638C117.18 113.932 116.124 116.595 113.831 117.586C111.536 118.582 108.874 117.523 107.881 115.23C103.517 105.139 93.2025 98.617 81.5999 98.617C69.7302 98.617 59.3526 105.133 55.1663 115.218C54.4437 116.958 52.7586 118.01 50.986 118.01C50.4067 118.01 49.8198 117.898 49.2511 117.663C46.9429 116.704 45.8492 114.054 46.8072 111.748C52.404 98.273 66.0629 89.5669 81.5999 89.5669C96.8125 89.5669 110.39 98.2293 116.187 111.638ZM50.1457 58.339C50.1457 53.1736 54.335 48.9842 59.5005 48.9842C64.6644 48.9842 68.8538 53.1721 68.8538 58.339C68.8538 63.5075 64.6644 67.6953 59.5005 67.6953C54.335 67.6953 50.1457 63.5075 50.1457 58.339ZM92.5628 58.339C92.5628 53.1736 96.7552 48.9842 101.921 48.9842C107.085 48.9842 111.274 53.1721 111.274 58.339C111.274 63.5075 107.086 67.6953 101.921 67.6953C96.7552 67.6953 92.5628 63.5075 92.5628 58.339Z" fill="#666666"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_525_1530">
                            <rect width="160" height="160" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="mt-4 flex flex-col items-center text-base font-bold leading-3">
                    <h1 className="text-2xl">404</h1>
                    <span>Página no encontrada</span>
                </div>

                <div className="text-center mt-2 text-[15px] pl-4 pr-4 w-full">
                    <p>La página que estás buscando no existe o ha ocurrido algún error. Intenta volver al inicio.</p>
                    <button className="bg-[#F9BC60] p-1 w-full mt-4 rounded-lg text-base font-medium" onClick={() => navigate("/home")}>Volver al inicio</button>
                </div>
            </div>
        </>
    )
}

export default Error404
