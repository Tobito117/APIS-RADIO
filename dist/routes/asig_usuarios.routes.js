"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asig_usuarios_controller_1 = require("../controllers/asig_usuarios.controller");
const router = (0, express_1.Router)();
router.get('/', asig_usuarios_controller_1.getAsig_Usuarios);
router.get('/:id', asig_usuarios_controller_1.getAsig_UsuariosById);
router.post('/', asig_usuarios_controller_1.postAsig_Usuarios);
router.put('/:id', asig_usuarios_controller_1.putAsig_Usuarios);
router.delete('/:id', asig_usuarios_controller_1.deleteAsig_Usuarios);
router.put('/status/:id', asig_usuarios_controller_1.updateEstatusAsig_Usuarios);
exports.default = router;
//# sourceMappingURL=asig_usuarios.routes.js.map