import React from "react";
import Feriado from "../../types/Feriado";

type ModalProps = {
  feriado: Feriado;
  setOpenModal: (openModal: boolean) => void;
};

export default function Modal({ feriado, setOpenModal }: ModalProps) {
  console.log(feriado);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-[95%] sm:w-auto max-w-4xl p-2 md:p-4 lg:p-6">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xlfont-semibold">
                Feriados Nacionales Argentina
              </h3>
              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                onClick={() => setOpenModal(false)}
              ></button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-2 md:p-4 lg:p-6">
              <div className="my-4 flex max-h-[300px] flex-col gap-4 overflow-y-auto text-left text-lg leading-relaxed text-slate-500">
                <h1>{feriado.motivo}</h1>
                Fecha: {feriado.dia}/{feriado.mes}
                <a href={`${feriado.info}`}>
                  <p className="flex flex-wrap">
                    Mas informacion en : {feriado.info}
                  </p>
                </a>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase
                    hover:bg-slate-100
                text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
