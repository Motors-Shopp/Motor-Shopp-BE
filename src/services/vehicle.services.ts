import AppDataSource from '../data-source'
import { IGetCarsById } from '@interfaces/vehicles.interface'
/* import { AppError } from "@errors/AppError" */
import Vehicle from "@entities/vehicles.entity"

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
