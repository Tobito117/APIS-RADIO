import { Router } from "express";
import { getAccesorios, getAccesoriosById, postAccesorios, putAccesorios, getAccesoriosFiltrado , deleteAccesorios, updateEstatusAccesorios} from "../controllers/accesorios.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getAccesorios   );
 router.get('/filtrado/:tipo',  getAccesoriosFiltrado  );
 router.get('/:id',        getAccesoriosById   );
 router.post('/',          postAccesorios   );
 router.put('/:id',        putAccesorios   );
 router.delete('/:id',     deleteAccesorios );
 router.put('/status/:id', updateEstatusAccesorios);

export default router; 