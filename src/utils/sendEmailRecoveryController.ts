import { sendEmailRecoveryService } from "./sendEmailRecoveryService";
import {Request, Response} from 'express';

export const sendEmailRecoveryController = async (req: Request, res: Response): Promise<Response> =>{
    const { email } = req.body;
    const token = await sendEmailRecoveryService(email)
    return res.status(200).json({token: token})
}