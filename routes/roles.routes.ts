import { Router } from "express";
import { getRoles, getRolesById, postRoles, putRoles, deleteTipos,updateEstatusRoles } from "../controllers/roles.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getRoles   );
 router.get('/:id',        getRolesById   );
 router.post('/',          postRoles   );
 router.put('/:id',        putRoles   );
 router.delete('/:id',     deleteTipos );
 router.put('/status/:id', updateEstatusRoles);

export default router;