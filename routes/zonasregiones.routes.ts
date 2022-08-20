import { Router } from "express";
import { getZonasRegiones, getZonasRegionesById, postZonasRegiones, putZonasRegiones, /*deleteZonasRegiones,*/ updateEstatusZonasRegiones } from "../controllers/zonasregiones.controller";

const router = Router();

 router.get('/',           getZonasRegiones   );
 router.get('/:id',        getZonasRegionesById   );
 router.post('/',          postZonasRegiones   );
 router.put('/:id',        putZonasRegiones   );
//  router.delete('/:id',     deleteZonasRegiones );
 router.put('/status/:id', updateEstatusZonasRegiones);

export default router;