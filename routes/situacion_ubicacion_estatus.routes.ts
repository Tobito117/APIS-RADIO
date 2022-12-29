import { Router } from "express";
import { getStatus, getStatusById, postStatus, putStatus, deleteStatus } from "../controllers/situacion_ubicacion_estatus.controller";
import { validarJWT } from "../middlewares/validar-jwt";
const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getStatus);
 router.get('/:id',        getStatusById);
 router.post('/',          postStatus);
 router.put ('/:id',          putStatus);
 router.delete ('/:id',    deleteStatus);


export default router;