import { Router } from "express";
import { getVehiculos, getVehiculosById, postVehiculos, putVehiculos, deleteVehiculos, updateEstatusVehiculos } from "../controllers/vehiculos.controller";

const router = Router();

router.get('/',          getVehiculos   );
router.get('/:id',       getVehiculosById   );
router.post('/',         postVehiculos   );
router.put('/:id',       putVehiculos   );
router.delete('/:id',    deleteVehiculos );
router.put('/status/:id', updateEstatusVehiculos )

export default router;