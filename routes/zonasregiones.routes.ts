import { Router } from "express";
import { deleteZonasRegiones, getZonasRegiones,getZonasRegionesEstatusActivo, getZonasRegionesById, postZonasRegiones, putZonasRegiones, /*deleteZonasRegiones,*/ updateEstatusZonasRegiones } from "../controllers/zonasregiones.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();

// Todas tienen que pasar por la validación del JWT
 router.use( validarJWT );

 router.get('/',           getZonasRegiones   );
 router.get('/estatus',    getZonasRegionesEstatusActivo );
 router.get('/:id',        getZonasRegionesById );
 router.post('/',          [validarJWT,esAdminRole],postZonasRegiones   );
 router.put('/:id',        [validarJWT,esAdminRole],putZonasRegiones   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteZonasRegiones );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusZonasRegiones);

export default router;