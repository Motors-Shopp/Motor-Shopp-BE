import AppDataSource from '../data-source'
import { IGetCarsById, ICreateVehicle, IUpdateVehicle } from '@interfaces/vehicles.interface'
import Vehicle from "@entities/vehicles.entity"
import User from '@entities/users.entity'
import { AppError } from '@errors/appError'

export const createVehicleService = async (id: string, data: ICreateVehicle): Promise<Vehicle> =>{
    const vehiclesRepository = AppDataSource.getRepository(Vehicle);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: id });
    if(!user)throw new AppError(404, "User not found.");
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
    newVehicle.seller = user;

    const response = vehiclesRepository.create(newVehicle);
    await vehiclesRepository.save(response);

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

export const updateVehicleService = async (id: string, {title, description, year, kilometers, price, typeOfVehicle, img, fristImg}: IUpdateVehicle): Promise<void> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOneBy({id: id});

  if (!vehicle)throw new AppError(404, 'Vehicle not found.');

  vehicle.title = title || vehicle.title;
  vehicle.description = description || vehicle.description;
  vehicle.description = year || vehicle.year;
  vehicle.kilometers = kilometers || vehicle.kilometers;
  vehicle.price = price || vehicle.price;
  vehicle.typeOfVehicle = typeOfVehicle || vehicle.typeOfVehicle;
  vehicle.img = img || vehicle.img;
  vehicle.fristImg = fristImg || vehicle.fristImg;

  await vehicleRepository.update(id,vehicle);

};


export const deleteVehicleService = async ({id}:IGetCarsById): Promise<void> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const vehicle = await vehicleRepository.findOneBy({id: id});

  if (!vehicle)throw new AppError(404, 'Vehicle not found.');

 // vehicle.active = false;

};


