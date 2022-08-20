import { Router } from "express";
import { getRecursosCompras, getRecursosComprasById, postRecursosCompras, putRecursosCompras, /*deleteRecursosCompras,*/ updateEstatusRecursosCompras } from "../controllers/recursos-compras.controller";

const router = Router();

 router.get('/',           getRecursosCompras   );
 router.get('/:id',        getRecursosComprasById   );
 router.post('/',          postRecursosCompras   );
 router.put('/:id',        putRecursosCompras   );
//  router.delete('/:id',     deleteRecursosCompras );
 router.put('/status/:id', updateEstatusRecursosCompras);

export default router;