import { Router } from "express";
import { deleteRecursosCompras, getRecursosCompras, getRecursosComprasById, postRecursosCompras, putRecursosCompras, /*deleteRecursosCompras,*/ updateEstatusRecursosCompras } from "../controllers/recursos-compras.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getRecursosCompras   );
 router.get('/:id',        getRecursosComprasById   );
 router.post('/',          postRecursosCompras   );
 router.put('/:id',        putRecursosCompras   );
  router.delete('/:id',     deleteRecursosCompras );
 router.put('/status/:id', updateEstatusRecursosCompras);

export default router;