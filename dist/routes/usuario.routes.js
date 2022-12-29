"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.getUsuarios);
router.get('/:id', usuario_controller_1.getUsuarioById);
router.post('/revalidar', validar_jwt_1.validarJWT, usuario_controller_1.revalidarToken);
router.post('/', usuario_controller_1.postUsuario);
router.put('/:id', usuario_controller_1.putUsuario);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], usuario_controller_1.deleteUsuario);
router.put('/status/:id', usuario_controller_1.updateEstatusUsuario);
router.put('/cambiar/:id', usuario_controller_1.cambiarContraseña);
router.post('/validar', /*[
    check('username','El Usuario es obligatori').isEmail()]*/ usuario_controller_1.validarUsuarioPrueba);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map