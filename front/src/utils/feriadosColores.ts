import Feriado from "../types/Feriado";

const feriadosColores = ["Inamovible", "Trasladable", "Puente"];

const getColorFromArray = (date: Date, feriados: Feriado[]) => {
  const d = new Date(date);
  let holidays = feriados.filter((feriado) => {
    const d2 = new Date(feriado.fecha);
    return d2.getTime() === d.getTime();
  });
  if (holidays.length === 0) {
    return "";
  }
  let colors = feriadosColores.filter(
    (feriado) => feriado.toLowerCase() === holidays[0].tipo.toLowerCase()
  );

  return colors[0];
};

export default { feriadosColores, getColorFromArray };
