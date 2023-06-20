import { Router } from "express";
import { getAccesorios, getAccesoriosById, postAccesorios, putAccesorios, getAccesoriosFiltrado , deleteAccesorios, updateEstatusAccesorios} from "../controllers/accesorios.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getAccesorios   );
 router.get('/filtrado/:tipo',  getAccesoriosFiltrado  );
 router.get('/:id',        getAccesoriosById   );
 router.post('/',          [validarJWT,esAdminRole],postAccesorios   );
 router.put('/:id',         [validarJWT,esAdminRole],putAccesorios   );
 router.delete('/:id',    [validarJWT,esAdminRole], deleteAccesorios );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusAccesorios);

export default router; 