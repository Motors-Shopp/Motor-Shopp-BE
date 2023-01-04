export interface IAddress {
  id: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  state: string;
}

export interface IAddressRequest {
  street: string;
  number: string;
  complement?: string;
  district: string;
  state: string;
}

export interface IAddressUpdate {
  id?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  state?: string;
}
