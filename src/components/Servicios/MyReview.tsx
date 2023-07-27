import Rating from "./Rating";

export default function myReview() {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-row items-center justify-between w-[328px]">
        <h1 className="text-center text-black text-lg font-bold leading-7">
          5 Reseñas
        </h1>
        <button className="text-black text-sm font-normal">Ver todas</button>
      </div>
      <div className="flex flex-row justify-start items-center gap-x-2 w-[328px] mt-[13px]">
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/48x48"
        />
        <div className="flex flex-col">
          <div className="text-black text-sm font-bold leading-[21px] tracking-wide">
            Nicolás Velazco
          </div>
          <div className="w-[220px] text-left">
            <Rating />
          </div>
        </div>
      </div>

      <div className="w-[328px] text-black text-sm font-normal leading-[18.05px] mt-4">
        El trabajo realizado fue excelente y muy rápido. <br />
        Lo recomiendo.
      </div>
      <div className="w-[328px] text-black text-[10px] font-normal leading-[15px] tracking-wide mt-4">
        10 de enero del 2023
      </div>
      <button className="w-[328px] h-10 bg-orange-300 rounded-[5px] mt-[23px]">
        Mi reseña
      </button>
    </div>
  );
}
