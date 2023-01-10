import { updateAddressController } from "@controllers/address.controller";

import { Router } from "express";

export const addressRouter = Router();

addressRouter.patch("/:id", updateAddressController);
