import { useState } from "react";
import Calendar, { CalendarTileProperties } from "react-calendar";
import Feriado from "../../types/Feriado";
import feriadosColores from "../../utils/feriadosColores";
import dateUtils from "../../utils/dateUtils";
import Modal from "../modal/Modal";
import "./calendar.css";

type HolidayCalendarProps = {
  feriados: Feriado[] | undefined;
};

// <div className="flex flex-col w-full h-[calc(80vh-120px)] bg-blue-100 items-center p-4 md:p-8 lg:p-12 xl:p-16 text-lg md:text-xl xl:text-2xl 2xl:text-3xl"></div>
export default function HolidayCalendar({ feriados }: HolidayCalendarProps) {
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, x) => x);
  const [openModal, setOpenModal] = useState(false);
  const [currentFeriado, setCurrentFeriado] = useState<Feriado>();

  //get the color of the day if its a holiday
  const tileContent = ({
    date,
    view,
  }: CalendarTileProperties): JSX.Element | null => {
    if (view === "month") {
      const getColor = feriadosColores.getColorFromArray(date, feriados!);

      return (
        <div
          className={`${
            getColor !== ""
              ? `text-white haveholiday ${getColor.toLowerCase()} cursor-pointer`
              : ""
          } w-full h-full flex items-center justify-center absolute inset-0 z-20`}
        >
          {date.getDate()}
        </div>
      );
    }
    return null;
  };

  const setFeriadoFromCalendar = (value: Date) => {
    let feriado = dateUtils.compareHolidayWithDate(value, feriados!);
    if (feriado) {
      setCurrentFeriado(feriado);
      setOpenModal(true);
      return;
    }
    setOpenModal(false);
    setCurrentFeriado(undefined);
  };

  const displayMonths = () => {
    return months.map((month) => {
      return (
        <div
          className="month flex items-center flex-col  w-full gap-2 md:gap-4 lg:gap6"
          key={month}
        >
          <h1 className="mx-auto text-lg md:text-xl xl:text-2xl ">
            {
              //Generate title with new date and get the month name
              new Date(year, month)
                .toLocaleString("default", { month: "long" })
                .toUpperCase()
            }
          </h1>
          <Calendar
            value={new Date(year, month)}
            className="text-center"
            tileClassName="relative bg-transparent"
            tileContent={tileContent}
            onClickDay={(value) => setFeriadoFromCalendar(value)}
            showNeighboringMonth={false}
            showNavigation={false}
            locale="es-ES"
          />
        </div>
      );
    });
  };

  return (
    <div
      className="yearly-calendar w-full grid grid-cols-1 
    md:grid-cols-2 xl:grid-cols-3 items-center mx-auto
    gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10
    mt-12
    "
    >
      {displayMonths()}
      {openModal && (
        <Modal feriado={currentFeriado!} setOpenModal={setOpenModal}></Modal>
      )}
    </div>
  );
}
