import React from "react";
import feriadosUtils from "../../utils/feriadosColores";

export default function ColorsReferences() {
  const showBoxes = () => {
    return feriadosUtils.feriadosColores.map((feriado, index) => {
      return (
        <div
          key={index}
          className="flex flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 w-auto"
        >
          <div
            className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 ${feriado.toLowerCase()}`}
          ></div>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl">{feriado}</p>
        </div>
      );
    });
  };

  return (
    <div
      className="my-2 px-2 md:my-4 lg:my-6 xl:my-8 flex flex-row items-center justify-center 
    gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10"
    >
      {showBoxes()}
    </div>
  );
}
