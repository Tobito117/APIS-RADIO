import { Router } from "express";
import { getLineas, getLineasById, postLineas, putLineas, deleteLineas, updateEstatusLineas } from "../controllers/lineas.controller";

const router = Router();

 router.get('/',              getLineas   );
 router.get('/:id',           getLineasById   );
 router.post('/',             postLineas   );
 router.put('/:id',           putLineas   );
 router.delete('/:id',        deleteLineas );
 router.put('/status/:id',    updateEstatusLineas);

export default router;