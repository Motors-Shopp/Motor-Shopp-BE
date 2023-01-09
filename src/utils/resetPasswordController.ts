import {Request, Response} from 'express';
import { resetPasswordService } from './resetPasswordService';

export const resetPasswordController = async (req: Request, res: Response): Promise<Response> => {
    const { token ,password, confirmpassword } = req.body;
 
   await resetPasswordService(token, password, confirmpassword)
   return res.status(200).json({message: "Senha atualizada com sucesso."})
}