import { createVehicleController, deleteVehicleController, getVehicleByIDController, getVehicleController } from '@controllers/vehicle.controllers';
import { Router } from 'express';

export const vehiclesRouter = Router();

vehiclesRouter.get("", getVehicleController) 
vehiclesRouter.get("/:id", getVehicleByIDController)
vehiclesRouter.post("", createVehicleController);
vehiclesRouter.delete("/:id", deleteVehicleController);
vehiclesRouter.patch("/:id", updateVehicleController);
