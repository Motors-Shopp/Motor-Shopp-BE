import { vehiclesRouter } from "@routes/vehicles.routes";
import { Router } from "express";
import { usersRouter } from "./users.routes";
import { commentsRouter } from "@routes/comments.routes";
import { recoveryPassRouter } from "./recoveryPassword.routes";

export const AppRoutes = Router();

AppRoutes.use("/vehicles", vehiclesRouter);
AppRoutes.use("/users", usersRouter);
AppRoutes.use("/comments", commentsRouter);

//recovery password route
AppRoutes.use("/password", recoveryPassRouter)

