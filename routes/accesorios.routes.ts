import { Router } from "express";
import { getAccesorios, getAccesoriosById, postAccesorios, putAccesorios, deleteAccesorios, updateEstatusAccesorios} from "../controllers/accesorios.controller";

const router = Router();

 router.get('/',           getAccesorios   );
 router.get('/:id',        getAccesoriosById   );
 router.post('/',          postAccesorios   );
 router.put('/:id',        putAccesorios   );
 router.delete('/:id',     deleteAccesorios );
 router.put('/status/:id', updateEstatusAccesorios);

export default router;