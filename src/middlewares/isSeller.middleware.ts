import Vehicle from "@entities/vehicles.entity";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "src/data-source";
import { AppError } from "@errors/appError";

export const ensureSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { isAdm } = req.user;
  const userID = req.user.id;

  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOneBy({id: id});

  if (!vehicle)throw new AppError(404, 'Vehicle not found.');

  if (!isAdm || vehicle?.seller.id !== userID)throw new AppError(401, 'Autenticação inválida');
  
  next();
};