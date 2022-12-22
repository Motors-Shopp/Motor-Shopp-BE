
export interface ICreateVehicle {
    name: string;
    model: string;
    localization: string; 
    year: number;
    plate: string; 
    kilometers: number;
    price: number;  
}

export interface IGetCarsById {
    id: string
}