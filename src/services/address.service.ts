import Address from "@entities/address.entity";
import User from "@entities/users.entity";
import { IAddressRequest, IAddressUpdate } from "@interfaces/address.interface";
import AppDataSource from "../data-source";

export const createAddressService = async ({
  street,
  number,
  complement,
  district,
  state,
}: IAddressRequest) => {
  const addressRepository = AppDataSource.getRepository(Address);
  const address = await addressRepository.find();

  const haveComp = complement ? complement : (complement = "N/D");

  complement = haveComp;

  const newAddress = addressRepository.create({
    street,
    number,
    complement,
    district,
    state,
  });

  await addressRepository.save(newAddress);

  return newAddress;
};

export const updateAddressService = async ({
  id,
  street,
  number,
  complement,
  district,
  state,
}: IAddressUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  console.log(account);

  // const addId = account!.address.id;

  const addressRepository = AppDataSource.getRepository(Address);
  const address = await addressRepository.find();

  const findAddress = address.find(() => account!.address.id === id);

  if (!findAddress) {
    // throw new Error("esta conta não possui um endereço");
    console.log(id);
    // console.log(account);
    console.log(findAddress);
  }

  street !== undefined ? (findAddress!.street = street) : findAddress!.street;
  number !== undefined ? (findAddress!.number = number) : findAddress!.number;
  complement !== undefined
    ? (findAddress!.complement = complement)
    : findAddress!.complement;
  district !== undefined
    ? (findAddress!.district = district)
    : findAddress!.district;
  state !== undefined ? (findAddress!.state = state) : findAddress!.state;

  await addressRepository.update(findAddress!.id, {
    street: street,
    number: number,
    complement: complement,
    district: district,
    state: state,
  });

  return true;
};
