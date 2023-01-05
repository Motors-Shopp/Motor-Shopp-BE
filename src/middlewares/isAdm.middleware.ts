import {Request, Response, NextFunction} from "express";
import { AppError } from "../errors/appError";

export const isAdm = async (req: Request, res: Response, next: NextFunction) =>{

    if(!req.user.isAdm)throw new AppError(401, "São necessários privilégios de administrador.");

    next();

}