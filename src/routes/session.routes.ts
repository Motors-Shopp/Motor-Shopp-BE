import { Router } from "express";

import { newSessionController } from "@controllers/sessions.controller";

export const sessionRouter = Router();

sessionRouter.post("", newSessionController);
