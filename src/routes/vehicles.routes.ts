import { createVehicleController, getVehicleController } from '@controllers/vehicle.controllers';
// import { getVehicleController, getCarByIDController, createVehicleController } from '@controllers/vehicle.controllers';
import { Router } from 'express';

export const vehiclesRouter = Router();

vehiclesRouter.get("", getVehicleController) 
// vehiclesRouter.get("/:id", getCarByIDController)
vehiclesRouter.post("", createVehicleController);
/*vehiclesRouter.delete("/:id", );
vehiclesRouter.patch("/:id", );
 */