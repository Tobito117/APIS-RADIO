import { Router } from "express";
import { getVehiculos, getVehiculosById, postVehiculos, putVehiculos, deleteVehiculos, updateEstatusVehiculos, getVehiculosEstatus } from "../controllers/vehiculos.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
 router.use( validarJWT );

router.get('/',          getVehiculos   );
router.get('/estatus',   getVehiculosEstatus);
router.get('/:id',       getVehiculosById   );
router.post('/',         [validarJWT,esAdminRole],postVehiculos   );
router.put('/:id',       [validarJWT,esAdminRole],putVehiculos   );
router.delete('/:id',    [validarJWT,esAdminRole],deleteVehiculos );
router.put('/status/:id',[validarJWT,esAdminRole], updateEstatusVehiculos );

export default router;