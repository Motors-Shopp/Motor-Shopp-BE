
import {Request, Response} from 'express';
import { instanceToPlain } from "class-transformer";
import { getVehicleByIdService, getVehiclesService } from '@services/vehicle.services';

export const getVehicle = async(_: Request, res: Response): Promise<Response> =>{
    const vehicle = await getVehiclesService();
    return res.status(200).json(instanceToPlain(vehicle));
  }

export const getCarByID = async (req: Request, res: Response): Promise<Response> =>{
    const { id } = req.params;
    const user = await getVehicleByIdService({ id });
    return res.status(200).json(instanceToPlain(user));
  }
