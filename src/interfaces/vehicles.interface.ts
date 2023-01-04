
export interface ICreateVehicle {
    title: string;
    description: string;
    year: string;
    kilometers: string;
    price: string;  
    typeOfVehicle: string;
    img: string;
    fristImg: string;
}

export interface IUpdateVehicle {
    title: string;
    description: string;
    year: string;
    kilometers: string;
    price: string;  
    typeOfVehicle: string;
    img: string;
    fristImg: string;
}

export interface IGetCarsById {
    id: string
}
