import { Router } from "express";
import { deleteZonasRegiones, getZonasRegiones, getZonasRegionesById, postZonasRegiones, putZonasRegiones, /*deleteZonasRegiones,*/ updateEstatusZonasRegiones } from "../controllers/zonasregiones.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getZonasRegiones   );
 router.get('/:id',        getZonasRegionesById );
 router.post('/',          postZonasRegiones   );
 router.put('/:id',        putZonasRegiones   );
 router.delete('/:id',     deleteZonasRegiones );
 router.put('/status/:id', updateEstatusZonasRegiones);

export default router;