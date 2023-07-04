"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asig_usuarios_controller_1 = require("../controllers/asig_usuarios.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
router.get('/', asig_usuarios_controller_1.getAsig_Usuarios);
router.get('/usuarios/:nombre', asig_usuarios_controller_1.getAsignacionPorUsuario);
router.get('/filtrado/listo/', asig_usuarios_controller_1.getAsig);
router.get('/radio/:rfsi/:usuarioBuscar', asig_usuarios_controller_1.getAsignacionPorRfsi);
router.get('/:id', asig_usuarios_controller_1.getAsig_UsuariosById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], asig_usuarios_controller_1.postAsig_Usuarios);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], asig_usuarios_controller_1.putAsig_Usuarios);
router.put('/ActualizarSue/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], asig_usuarios_controller_1.actualizarSueRadio);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], asig_usuarios_controller_1.deleteAsig_Usuarios);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], asig_usuarios_controller_1.updateEstatusAsig_Usuarios);
exports.default = router;
//# sourceMappingURL=asig_usuarios.routes.js.map