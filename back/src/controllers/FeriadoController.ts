import { Request, Response } from "express";
import Feriado from "../model/Feriados";
import { LeanDocument } from "mongoose";
import FeriadoType from "../types/FeriadoType";

const getAll = async (req: Request, res: Response) => {
  try {
    const feriados =
      (await Feriado.find().lean()) as LeanDocument<FeriadoType>[];
    if (feriados.length === 0) {
      res.status(404).send("No hay feriados");
    }

    const feriadosWithDate = feriados.map((feriado: FeriadoType) => {
      const fecha = new Date();
      fecha.setMonth(feriado.mes - 1);
      fecha.setDate(feriado.dia);
      fecha.setHours(0, 0, 0, 0);
      return { ...feriado, fecha };
    });

    res.status(200).send(feriadosWithDate);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const feriado = await Feriado.findById(req.params.id);
    if (feriado) {
      res.status(200).send(feriado);
    } else {
      res.status(404).send("No se encontró el feriado");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { getAll, getById };
