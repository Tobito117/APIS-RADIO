import { Router } from "express";
import { getAsig_Accesorios, getAsig_AccesoriosById, postAsig_Accesorios, putAsig_Accesorios, deleteAsig_Accesorios, updateEstatusAsig_Accesorios } from "../controllers/asig_accesorios.controller";

const router = Router();

 router.get('/',           getAsig_Accesorios   );
 router.get('/:id',        getAsig_AccesoriosById   );
 router.post('/',          postAsig_Accesorios   );
 router.put('/:id',        putAsig_Accesorios   );
 router.delete('/:id',     deleteAsig_Accesorios );
 router.put('/status/:id', updateEstatusAsig_Accesorios);

export default router;