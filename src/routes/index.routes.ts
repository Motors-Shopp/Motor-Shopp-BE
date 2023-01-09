import { commentsRouter } from "@routes/comments.routes";
import { vehiclesRouter } from "@routes/vehicles.routes";
import { Router } from "express";
import { sessionRouter } from "./session.routes";
import { usersRouter } from "./users.routes";
import { commentsRouter } from "@routes/comments.routes";
import { recoveryPassRouter } from "./recoveryPassword.routes";

export const AppRoutes = Router();

AppRoutes.use("/vehicles", vehiclesRouter);
AppRoutes.use("/users", usersRouter);
AppRoutes.use("/comments", commentsRouter);
AppRoutes.use("/login", sessionRouter);

//recovery password route
AppRoutes.use("/password", recoveryPassRouter)

AppRoutes.use("/login", sessionRouter);