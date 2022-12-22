import AppDataSource from '../data-source'
import { IGetCarsById, ICreateVehicle } from '@interfaces/vehicles.interface'
/* import { AppError } from "@errors/AppError" */
import Vehicle from "@entities/vehicles.entity"

export const createVehicleService = async ({  name, model, localization, year, plate, kilometers, price }: ICreateVehicle): Promise<Vehicle> =>{
    const vehiclesRepository = AppDataSource.getRepository(Vehicle);

    const vehicleAlreadyExists = await vehiclesRepository.findOneBy({plate: plate});
    
    if(vehicleAlreadyExists)throw new Error//AppError(400, "Vehicle already exists.");

    const newVehicle = vehiclesRepository.create({
        name,
        model,
        localization,
        year,
        kilometers,
        price
    });

    await vehiclesRepository.save(newVehicle);

    return newVehicle;
}

export const getVehiclesService = async (): Promise<Vehicle[]> => {
    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    const vehicles = await vehicleRepository.find();
    return vehicles
  }


export const getVehicleByIdService = async ({id}:IGetCarsById): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const vehicle = await vehicleRepository.findOneBy({id: id});

  if (!vehicle)throw new Error//AppError(404, 'Vehicle not found.')

  return vehicle
}
