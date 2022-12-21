import { getVehicleController, getCarByIDController } from '@controllers/vehicle.controllers';
import { Router } from 'express';

export const vehiclesRouter = Router();

vehiclesRouter.get("", getVehicleController) 
vehiclesRouter.get("/:id", getCarByIDController)
/*vehiclesRouter.post("", );
vehiclesRouter.delete("/:id", );
vehiclesRouter.patch("/:id", );
 */