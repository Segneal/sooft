import React from "react";
import header from "./header.svg";

export default function Header() {
  return (
    <div
      className="h-[125px] md:h-[150px] xl:x-[175px] 
    bg-[#D3D4D9] flex justify-center items-center font-nunito font-bold 
    text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white overflow-hidden relative"
    >
      <img src={header} alt="header" className="w-full absolute z-10" />
      <h1 className="z-20">Feriados Argentina</h1>
    </div>
  );
}
