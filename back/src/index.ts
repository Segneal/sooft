import express from "express";
import cors from "cors";
import MongoDBConection from "./db/db";
import { router as FeriadoRoutes } from "./routes/FeriadoRoutes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

//Routes
app.use("/feriados", FeriadoRoutes);

//DB Connection
MongoDBConection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
