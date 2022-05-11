import { Router } from "express";
import { check } from "express-validator";

import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";


import { getUsuarios, getUsuarioById, postUsuario, putUsuario, deleteUsuario, validarUsuarioPrueba, updateEstatusUsuario } from "../controllers/usuario.controller";


const router = Router();

router.get('/',         getUsuarios);
router.get('/:id',      getUsuarioById);
router.post('/',        postUsuario);
router.put('/:id',      putUsuario);
router.delete('/:id',[validarJWT,esAdminRole],   deleteUsuario);
router.put('/status/:id', updateEstatusUsuario);
router.post('/validar',/*[
    check('username','El Usuario es obligatori').isEmail()]*/ validarUsuarioPrueba);

export default router;