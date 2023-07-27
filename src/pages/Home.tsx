import background from "../assets/background.png";
import Categories from "../components/Home/Categories";
import MyFavorites from "../components/Home/MyFavorites";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="relative flex flex-col justify-center items-center m-0 p-0 box-content">
          <img src={background} className="w-360 h-600" alt="" />
          <p className="absolute text-[32px] text-white font-bold pl-4 pr-4 pt-0 pb-20">
            Soluciones a medida para transformar tu hogar
          </p>
          <p className="absolute text-[15px] text-white font-bold pl-5 pr-4 pt-40 pb-0">
            Experiencia, profesionalismo y excelencia a tu servicio
          </p>
        </div>
        <div className="flex flex-col pl-4 pr-4 items-center text-center">
          <p className="text-[32px] text-black font-bold pl-4 pr-4 pt-5 pb-20">
            ¿En que servicio te podemos ayudar?
          </p>
        </div>
        <Categories />
        <div className="w-full mt-6">
          <button
            className="bg-[#F9BC60] rounded-lg text-[#0D0D0D] p-2 w-full"
            type="submit"
          >
            Ver más
          </button>
        </div>
        <MyFavorites />
      </div>
    </>
  );
};

export default Home;
