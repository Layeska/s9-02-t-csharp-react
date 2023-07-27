import ImageHero from "../assets/about.png"
import data from '../data/dataAbout'
import Banner from "../assets/banner.png"


const About = () => {
 
    return (
        <div>
            <div className="relative flex flex-col justify-center items-center m-0 p-0 box-content">
                <img src={ImageHero} alt="" className=""/>
                <p className="absolute text-[32px] text-white font-bold pl-4 pr-4 pt-20 pb-20">Déjalo en manos de los especialistas: soluciones efectivas para arreglar lo que necesitas</p>
            </div>

            <div className="flex flex-col pl-4 pr-4 items-center text-center">
                <h1 className="text-2xl text-[#0D0D0D] pb-6 pt-10 font-medium">Nuestros servicios</h1>
                {
                    data.map((item,index) => (
                        <div key={index} className="flex flex-col justify-center items-center mt-6">
                            <div  className=" bg-[#F9BC60] rounded-full w-[160px] h-[160px] flex justify-center items-center ">
                                <img src={item.imagen} alt="" className="w-[100px] h-[100px]"/>
                            </div>
                            <h2 className="pt-4 pb-4 font-medium text-base text-[#0D0D0D]">{item.title}</h2>
                            <p className="text-base">{item.description}</p>
                        </div>
                    ))
                }
                <img src={Banner} alt="image banner" className="mt-10" />
                <h3 className="p-6 text-2xl">Miles de personas ya están contratando profesionales.</h3>
                <p className="mb-20 text-base">Olvídate de buscar por tu cuenta y utiliza nuestro servicio. Conectamos con los mejores expertos. Obtén tranquilidad
                y deja que los profesionales resuelvan tus problemas. ¡Simplifica tu vida y mantén tu hogar en perfectas condiciones con nuestro servicio confiable y eficiente!</p>
            </div>
        </div>
    )
}

export default About
