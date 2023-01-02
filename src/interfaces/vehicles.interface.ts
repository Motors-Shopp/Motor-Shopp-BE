
export interface ICreateVehicle {
    title: string;
    model: string;
    localization: string; 
    description: string;
    year: number;
    plate: string; 
    kilometers: number;
    price: number;  
    typeOfVehicle: string;
    img: string;
    fristImg: string;
}

export interface IGetCarsById {
    id: string
}