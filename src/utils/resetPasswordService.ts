import User from '@entities/users.entity';
import { AppError } from '@errors/appError';
import { IDecodeToken } from '@interfaces/jwt.interface';
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import AppDataSource from 'src/data-source';
import bcrypt from "bcryptjs";

export const resetPasswordService = async (token: string, password: string, confirmpassword: string):Promise<void> => {
    if(password !== confirmpassword) throw new AppError(500, "As senhas devem ser iguais.")
    
    token = token.split(' ')[0];
    const decoded = jwt.decode(token);
    const userId = decoded!.sub?.toString()
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({id: userId})
    if(!user) throw new AppError(404, "Usuário não encontrado.")
    user.password = await bcrypt.hash(password, 8)
    await userRepository.save(user)

}
  