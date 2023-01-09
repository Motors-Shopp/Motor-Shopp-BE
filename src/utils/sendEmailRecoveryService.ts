import User from "@entities/users.entity";
import { AppError } from "@errors/appError";
import AppDataSource from "src/data-source";
import { generateJWTToken } from "./generateJWTToken";

export const sendEmailRecoveryService = async (email: string): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({email: email});
    if (!user)throw new AppError(404, 'Email inválido.');
    const token = generateJWTToken(user.id);
    return token
  }
  