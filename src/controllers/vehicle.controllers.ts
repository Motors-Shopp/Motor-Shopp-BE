import {Request, Response} from 'express';
import { instanceToPlain } from "class-transformer";
import { createVehicleService, getVehiclesService } from '@services/vehicle.services';

// import { createVehicleService, getVehicleByIdService, getVehiclesService } from '@services/vehicle.services';

import { ICreateVehicle } from '@interfaces/vehicles.interface';
import { Any } from 'typeorm';

export const createVehicleController = async (req: Request, res: Response): Promise<Response> =>{
    const data = req.body;
    const { userID } = req.user;

    const newVehicle = await createVehicleService(userID, data);
    
    return res.status(201).json({ message: 'Restaurante cadastrado com sucesso.'});
    
}
export const getVehicleController = async(_: Request, res: Response): Promise<Response> =>{
    const vehicle = await getVehiclesService();
    return res.status(200).json(instanceToPlain(vehicle));
  }

// export const getCarByIDController = async (req: Request, res: Response): Promise<Response> =>{
//     const { id } = req.params;
//     const user = await getVehicleByIdService({ id });
//     return res.status(200).json(instanceToPlain(user));
// }
