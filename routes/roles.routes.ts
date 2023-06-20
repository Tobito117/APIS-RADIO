import { Router } from "express";
import { getRoles, getRolesById, postRoles, putRoles, deleteTipos,updateEstatusRoles, getRolesEstatus } from "../controllers/roles.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getRoles   );
 router.get('/estatus/',           getRolesEstatus   );
 router.get('/:id',        getRolesById   );
 router.post('/',          [validarJWT,esAdminRole],postRoles   );
 router.put('/:id',        [validarJWT,esAdminRole],putRoles   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteTipos );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusRoles);

export default router;