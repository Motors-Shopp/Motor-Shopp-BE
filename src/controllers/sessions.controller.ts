import { IUserLogin } from "@interfaces/user.interface";
import { newSessionService } from "@services/sessions.services";
import { Request, Response } from "express";
newSessionService;

export const newSessionController = async (req: Request, res: Response) => {

  const { email, password }: IUserLogin = req.body;

  const token: string = await newSessionService({ email, password });

  return res.json({ token });
};
