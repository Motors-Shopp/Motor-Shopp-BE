import AppDataSource from '../data-source'
import { IGetCarsById, ICreateVehicle, IUpdateVehicle } from '@interfaces/vehicles.interface'
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


export const getVehicleByIdService = async ({id}:IGetCarsById): Promise<Vehicle> => {
   const vehicleRepository = AppDataSource.getRepository(Vehicle)
   const vehicle = await vehicleRepository.findOneBy({id: id});

   if (!vehicle)throw new AppError(404, 'Vehicle not found.')

   return vehicle
}

export const updateVehicleService = async (id: string, userID: string, isAdm: boolean, {title, description, year, kilometers, price, typeOfVehicle, img, fristImg}: IUpdateVehicle): Promise<void> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const vehicle = await vehicleRepository.findOneBy({id: id});

  if (!vehicle)throw new AppError(404, 'Vehicle not found.')

  if(vehicle.seller.id !== userID && !isAdm)throw new AppError(401, "Autenticação inválida.");

  const updatedVehicle = new Vehicle();
  updatedVehicle.title = title || updatedVehicle.title;
  updatedVehicle.description = description || updatedVehicle.description;
  updatedVehicle.description = year || updatedVehicle.year;
  updatedVehicle.kilometers = kilometers || updatedVehicle.kilometers;
  updatedVehicle.price = price || updatedVehicle.price;
  updatedVehicle.typeOfVehicle = typeOfVehicle || updatedVehicle.typeOfVehicle;
  updatedVehicle.img = img || updatedVehicle.img;
  updatedVehicle.fristImg = fristImg || updatedVehicle.fristImg;

  await vehicleRepository.update(id,updatedVehicle);

}


export const deleteVehicleService = async ({id}:IGetCarsById): Promise<void> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const vehicle = await vehicleRepository.findOneBy({id: id});

  if (!vehicle)throw new AppError(404, 'Vehicle not found.');

  vehicle.active = false;

}
