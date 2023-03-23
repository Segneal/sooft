import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FeriadoSchema = new Schema({
  motivo: String,
  tipo: String,
  info: String,
  dia: Number,
  mes: Number,
  id: String,
});

const Feriado = mongoose.model("Feriado", FeriadoSchema);

export default Feriado;
