import { Router } from "express";
import { getUsuarios, getUsuarioById, postUsuario, putUsuario, deleteUsuario, updateEstatusUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.get('/',           getUsuarios   );
router.get('/:id',        getUsuarioById   );
router.post('/',          postUsuario   );
router.put('/:id',        putUsuario   );
router.delete('/:id',     deleteUsuario );
router.put('/status/:id', updateEstatusUsuarios);

export default router;