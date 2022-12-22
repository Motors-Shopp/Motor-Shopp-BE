
import {Request, Response} from 'express';
import { instanceToPlain } from "class-transformer";
import { createVehicleService, getVehicleByIdService, getVehiclesService } from '@services/vehicle.services';
import { ICreateVehicle } from '@interfaces/vehicles.interface';

export const createVehicleController = async (req: Request, res: Response): Promise<Response> =>{
    const { name, model, localization, year, plate, kilometers, price }: ICreateVehicle = req.body;
    console.log(plate)
    const newVehicle = await createVehicleService({  name, model, localization, year, plate, kilometers, price });
    return res.status(201).json(newVehicle);
}
export const getVehicleController = async(_: Request, res: Response): Promise<Response> =>{
    const vehicle = await getVehiclesService();
    return res.status(200).json(instanceToPlain(vehicle));
  }

export const getCarByIDController = async (req: Request, res: Response): Promise<Response> =>{
    const { id } = req.params;
    const user = await getVehicleByIdService({ id });
    return res.status(200).json(instanceToPlain(user));
}
