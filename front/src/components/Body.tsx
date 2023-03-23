import React from "react";
import { useQuery } from "react-query";
import Api from "../service/api";
import Feriado from "../types/Feriado";
import HolidayCalendar from "./calendar/HolidayCalendar";
import ColorsReferences from "./references/ColorsReferences";

export default function Body() {
  const { data, isLoading } = useQuery<Feriado[] | undefined>(
    "getHolidays",
    Api.getAll,
    {
      refetchInterval: 3600000, // refetch every 1 hour minutes in the background
      refetchOnWindowFocus: false,
    }
  );

  return isLoading ? (
    <div
      className="flex flex-center justify-center w-full h-[100px] items-center text-center
    bg-[#F3F3F3] text-black font-bold text-3xl p-16"
    >
      Loading...
    </div>
  ) : (
    <div className="min-h-[calc(100vh-150px)] p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
      <ColorsReferences />
      <HolidayCalendar feriados={data} />
    </div>
  );
}
