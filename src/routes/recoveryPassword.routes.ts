import { ensureAuthMiddleware } from "@middlewares/auth.middleware";
import { resetPasswordController } from "@utils/resetPasswordController";
import { sendEmailRecoveryController } from "@utils/sendEmailRecoveryController";
import { Router } from "express";

export const recoveryPassRouter = Router();

recoveryPassRouter.post("/forgot", sendEmailRecoveryController);
recoveryPassRouter.post("/reset", resetPasswordController, resetPasswordController);