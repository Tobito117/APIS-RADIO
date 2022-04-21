import { Router } from "express";
import { getZonasRegiones, getZonasRegionesById, postZonasRegiones } from "../controllers/zonasregiones.controller";

const router = Router();

 router.get('/',       getZonasRegiones   );
 router.get('/:id',    getZonasRegionesById   );
 router.post('/',      postZonasRegiones   );
// router.put('/:id',    putVehiculos   );
// router.delete('/:id', deleteVehiculos );

export default router;