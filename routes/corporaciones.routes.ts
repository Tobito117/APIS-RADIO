import { Router } from "express";
import { deleteCorporaciones, getCorporaciones, getCorporacionesById, getCorporacionesEstatus, postCorporaciones, putCorporaciones, /*deleteCorporaciones*/ updateEstatusCorporaciones } from "../controllers/corporaciones.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getCorporaciones   );
 router.get('/estatus/',        getCorporacionesEstatus   );
 router.get('/:id',        getCorporacionesById   );
 router.post('/',          [validarJWT,esAdminRole],postCorporaciones   );
 router.put('/:id',        [validarJWT,esAdminRole],putCorporaciones   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteCorporaciones );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusCorporaciones);

export default router;