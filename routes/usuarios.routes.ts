import { Router } from "express";
import { check } from "express-validator";
import { getUsuarios, getUsuariosIdNombre, getUsuariosIdCorporacion, getUsuariosIdCorporacion2, getUsuariosIdCorporacion3, getUsuarioById, postUsuario, putUsuario,  updateEstatusUsuarios, deleteUsuario } from "../controllers/usuarios.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

router.get('/',                     getUsuarios   );
router.get('/idnombre',             getUsuariosIdNombre );
router.get('/revisores/:id',        getUsuariosIdCorporacion );
router.get('/responsables/:id',     getUsuariosIdCorporacion2 );
router.get('/supervisores/:id',     getUsuariosIdCorporacion3 );
router.get('/:id',                  getUsuarioById );
router.post('/',                    postUsuario   );
router.put('/:id',                  putUsuario);
router.delete('/:id',               deleteUsuario );
router.put('/status/:id',           updateEstatusUsuarios);

export default router;