"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feriados_1 = __importDefault(require("../model/Feriados"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feriados = (yield Feriados_1.default.find().lean());
        if (feriados.length === 0) {
            res.status(404).send("No hay feriados");
        }
        const feriadosWithDate = feriados.map((feriado) => {
            const fecha = new Date();
            fecha.setMonth(feriado.mes - 1);
            fecha.setDate(feriado.dia);
            fecha.setHours(0, 0, 0, 0);
            return Object.assign(Object.assign({}, feriado), { fecha });
        });
        res.status(200).send(feriadosWithDate);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feriado = yield Feriados_1.default.findById(req.params.id);
        if (feriado) {
            res.status(200).send(feriado);
        }
        else {
            res.status(404).send("No se encontró el feriado");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = { getAll, getById };
