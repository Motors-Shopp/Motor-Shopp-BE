import { vehiclesRouter } from "@routes/vehicles.routes";
import { Router } from "express";
import { usersRouter } from "./users.routes";
import { commentsRouter } from "@routes/comments.routes";

export const AppRoutes = Router();

AppRoutes.use("/vehicles", vehiclesRouter);
AppRoutes.use("/users", usersRouter);
AppRoutes.use("/comments", commentsRouter);
