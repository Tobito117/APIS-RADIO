import { Router } from "express";
import { getUsuarios, getUsuarioById, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuarios.controller";

const router = Router();

router.get('/',       getUsuarios   );
router.get('/:id',    getUsuarioById   );
router.post('/',      postUsuario   );
router.put('/:id',    putUsuario   );
router.delete('/:id', deleteUsuario );

export default router;