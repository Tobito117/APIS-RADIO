import { Router } from "express";
import { deletePuestos, getPuestos, getPuestosById, getPuestosEstatus, postPuestos, putPuestos, /*deletePuestos*/ updateEstatusPuestos } from "../controllers/puestos.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
 router.use( validarJWT );

 router.get('/',           getPuestos   );
 router.get('/estatus/',           getPuestosEstatus   );
 router.get('/:id',        getPuestosById   );
 router.post('/',          [validarJWT,esAdminRole],postPuestos   );
 router.put('/:id',        [validarJWT,esAdminRole],putPuestos   );
 router.delete('/:id',     [validarJWT,esAdminRole],deletePuestos );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusPuestos);

export default router;