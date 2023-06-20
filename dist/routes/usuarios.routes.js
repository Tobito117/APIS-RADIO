"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', usuarios_controller_1.getUsuarios);
router.get('/idnombre', usuarios_controller_1.getUsuariosIdNombre);
router.get('/revisores/:id', usuarios_controller_1.getUsuariosIdCorporacion);
router.get('/responsables/:id', usuarios_controller_1.getUsuariosIdCorporacion2);
router.get('/supervisores/:id', usuarios_controller_1.getUsuariosIdCorporacion3);
router.get('/:id', usuarios_controller_1.getUsuarioById);
router.post('/', usuarios_controller_1.postUsuario);
router.put('/:id', usuarios_controller_1.putUsuario);
router.delete('/:id', usuarios_controller_1.deleteUsuario);
router.put('/status/:id', usuarios_controller_1.updateEstatusUsuarios);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map