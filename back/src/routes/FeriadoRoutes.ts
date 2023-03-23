import { Router } from "express";
import FeriadoController from "../controllers/FeriadoController";

export const router = Router();

router.get("/getAll", FeriadoController.getAll);
router.get("/:id", FeriadoController.getById);
