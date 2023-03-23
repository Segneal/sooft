import Feriado from "../types/Feriado";

//compare dates with getTime() method
const compareHolidayWithDate = (date1: Date, feriados: Feriado[]) => {
  const d1 = new Date(date1);
  let holidays = feriados.filter((feriado) => {
    const d2 = new Date(feriado.fecha);
    return d2.getTime() === d1.getTime();
  });
  if (holidays.length === 0) {
    return null;
  }
  return holidays[0];
};

const dateInArray = (date: Date, dates: Date[]) => {
  const d = new Date(date);
  return dates.some((date) => {
    const d2 = new Date(date);
    return d2.getTime() === d.getTime();
  });
};

export default {
  compareHolidayWithDate,
  dateInArray,
};
