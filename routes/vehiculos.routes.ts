import { Router } from "express";
import { getVehiculos, getVehiculosById, postVehiculos, putVehiculos, deleteVehiculos } from "../controllers/vehiculos.controller";

const router = Router();

router.get('/',       getVehiculos   );
router.get('/:id',    getVehiculosById   );
router.post('/',      postVehiculos   );
router.put('/:id',    putVehiculos   );
router.delete('/:id', deleteVehiculos );

export default router;