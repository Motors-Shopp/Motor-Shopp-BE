import { Router } from "express";
import { vehiclesRouter } from "@routes/vehicles.routes";


export const AppRoutes = Router();

AppRoutes.use("/vehicles", vehiclesRouter);

