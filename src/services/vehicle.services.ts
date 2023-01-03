import AppDataSource from '../data-source'
import { IGetCarsById, ICreateVehicle } from '@interfaces/vehicles.interface'
import Vehicle from "@entities/vehicles.entity"
import User from '@entities/users.entity'
import { AppError } from '@errors/appError'

export const createVehicleService = async (userID: string, data: ICreateVehicle): Promise<Vehicle> =>{
    const vehiclesRepository = AppDataSource.getRepository(Vehicle);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: userID });
    const { title,year,kilometers,price,description,typeOfVehicle,img,fristImg } = data;

    const newVehicle = new Vehicle();
    newVehicle.title = title;
    newVehicle.year = year;
    newVehicle.kilometers = kilometers;
    newVehicle.price = price;
    newVehicle.description = description;
    newVehicle.typeOfVehicle = typeOfVehicle;
    newVehicle.img = img;
    newVehicle.fristImg = fristImg;

    vehiclesRepository.create(newVehicle);
    user!.vehicles.push(newVehicle)
    await vehiclesRepository.save(newVehicle);

    return newVehicle;
}



export const getVehiclesService = async (): Promise<Vehicle[]> => {
    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    const vehicles = await vehicleRepository.find();
    return vehicles
  }


// export const getVehicleByIdService = async ({id}:IGetCarsById): Promise<Vehicle> => {
//   const vehicleRepository = AppDataSource.getRepository(Vehicle)
//   const vehicle = await vehicleRepository.findOneBy({id: id});

//   if (!vehicle)throw new Error//AppError(404, 'Vehicle not found.')

//   return vehicle
// }
