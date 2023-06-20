import { Router } from "express";
import { deleteRecursosCompras, getRecursosCompras, getRecursosComprasById, getRecursosComprasEstatus, postRecursosCompras, putRecursosCompras, /*deleteRecursosCompras,*/ updateEstatusRecursosCompras } from "../controllers/recursos-compras.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getRecursosCompras   );
 router.get('/estatus/',           getRecursosComprasEstatus   );
 router.get('/:id',        getRecursosComprasById   );
 router.post('/',          [validarJWT,esAdminRole],postRecursosCompras   );
 router.put('/:id',        [validarJWT,esAdminRole],putRecursosCompras   );
  router.delete('/:id',    [validarJWT,esAdminRole], deleteRecursosCompras );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusRecursosCompras);

export default router;