"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const FeriadoSchema = new Schema({
    motivo: String,
    tipo: String,
    info: String,
    dia: Number,
    mes: Number,
    id: String,
});
const Feriado = mongoose_1.default.model("Feriado", FeriadoSchema);
exports.default = Feriado;
