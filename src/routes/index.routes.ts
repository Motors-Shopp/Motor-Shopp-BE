import { Router } from "express";
import { vehiclesRouter } from "@routes/vehicles.routes";
import { commentsRouter } from "@routes/comments.routes";


export const AppRoutes = Router();

AppRoutes.use("/vehicles", vehiclesRouter);
AppRoutes.use("/comments", commentsRouter);

