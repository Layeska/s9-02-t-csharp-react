import { usePerfilInfoQuery } from "../../services/perfilApi";
import {
  useOfertasIdPreguntasPostMutation,
  useOfertasIdPreguntasQuery,
} from "../../services/ofertaApi";
import { useAppSelector } from "../../hooks/store";
import {  useState } from "react";
import React from "react";

export default function QuestionAndAnswer() {
  const datosProveedor = useAppSelector((state) => state.proveedor);
  const ofertaId = datosProveedor?.oferta_Id;
  const { data } = usePerfilInfoQuery(null);
  const [ofertas,] =
    useOfertasIdPreguntasPostMutation();
  const { data: preguntas} = useOfertasIdPreguntasQuery(ofertaId);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  
  const justAppearTwoQuestion = () => {
    return preguntas?.slice(-2);
  };

  const handleOfertaId = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const pregunta = formData.get("pregunta") as string;
    ofertas({ ofertaId, pregunta });
    form.reset();

  };

return (

  <div className="flex flex-col items-center mt-4">
    <div className="flex flex-row items-center justify-between w-[328px]">
      <h1 className="text-center text-black text-lg font-bold leading-7">
        Preguntas y Respuestas
      </h1>
      <button
        className="text-black text-sm font-normal cursor-pointer"
        onClick={() => setShowAllQuestions(!showAllQuestions)} 
      >
        Ver todas
      </button>
    </div>

    {showAllQuestions
      ? preguntas?.map((respuesta: any) => (
          <React.Fragment key={respuesta.id}>
            <div className="flex flex-row justify-start items-center gap-x-2 w-[328px] mt-[13px]">
              <img
                className="w-8 h-8 rounded-full border-black"
                src={data?.foto}
              />
              <div className="text-black text-sm font-bold leading-[21px] tracking-wide">
                {respuesta?.usuario.nombres} {respuesta?.usuario.apellidos}
              </div>
            </div>
            <h1 className="w-[328px] text-black text-sm font-normal leading-[18.05px] mt-4">
              {respuesta.texto}
            </h1>
            <h2 className="w-[328px] text-black text-xs font-normal leading-[18px] tracking-wide mt-4 ml-32">
              Respuesta
            </h2>
          </React.Fragment>
        ))
      : justAppearTwoQuestion()?.map((respuesta: any) => (
          <React.Fragment key={respuesta.id}>
            <div className="flex flex-row justify-start items-center gap-x-2 w-[328px] mt-[13px]">
              <img
                className="w-8 h-8 rounded-full border-black"
                src={data?.foto}
              />
              <div className="text-black text-sm font-bold leading-[21px] tracking-wide">
                {respuesta?.usuario.nombres} {respuesta?.usuario.apellidos}
              </div>
            </div>
            <h1 className="w-[328px] text-black text-sm font-normal leading-[18.05px] mt-4">
              {respuesta.texto}
            </h1>
            <h2 className="w-[328px] text-black text-xs font-normal leading-[18px] tracking-wide mt-4 ml-32">
              Respuesta
            </h2>
          </React.Fragment>
        ))}
    <form
      className="w-full h-[190px] bg-zinc-300 flex flex-col items-center justify-center "
      onSubmit={handleOfertaId}
    >
      <div className="flex w-[330px]">
        <span className="text-black text-left text-sm font-medium">
          Escribe una pregunta
        </span>
      </div>
      <div className="h-[86px] w-[330px] mt-3">
        <textarea
          className="w-full h-full bg-white rounded-[5px] border border-black"
          name="pregunta"
        />
      </div>
      <div className="w-[330px] flex justify-end mt-4">
        <button
          className="w-[105px] h-7 bg-orange-300 rounded-[5px]"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
)
      }