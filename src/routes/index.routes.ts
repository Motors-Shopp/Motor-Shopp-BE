import { commentsRouter } from "@routes/comments.routes";
import { vehiclesRouter } from "@routes/vehicles.routes";
import { Router } from "express";
import { addressRouter } from "./address.routes";
import { recoveryPassRouter } from "./recoveryPassword.routes";
import { sessionRouter } from "./session.routes";
import { usersRouter } from "./users.routes";

export const AppRoutes = Router();

AppRoutes.use("/vehicles", vehiclesRouter);
AppRoutes.use("/users", usersRouter);
AppRoutes.use("/comments", commentsRouter);
AppRoutes.use("/login", sessionRouter);
AppRoutes.use("/address", addressRouter);

//recovery password route
AppRoutes.use("/password", recoveryPassRouter);

AppRoutes.use("/login", sessionRouter);
