import { Router } from "express";
import { check } from "express-validator";
import { getUsuarios, getUsuarioById, postUsuario, putUsuario,  updateEstatusUsuarios, deleteUsuario } from "../controllers/usuarios.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

router.get('/',           getUsuarios   );
router.get('/:id',        getUsuarioById   );
router.post('/',          postUsuario   );
router.put('/:id',        putUsuario);
 router.delete('/:id',     deleteUsuario );
router.put('/status/:id', updateEstatusUsuarios);

export default router;