import { updateAddressService } from "@services/address.service";
import { Request, Response } from "express";

export const updateAddressController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { street, number, complement, district, state } = req.body;

    const newAddress = await updateAddressService({
      id,
      street,
      number,
      complement,
      district,
      state,
    });

    return res.status(200).json("address updated with sucess");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
