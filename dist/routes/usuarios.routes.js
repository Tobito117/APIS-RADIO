"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = (0, express_1.Router)();
router.get('/', usuarios_controller_1.getUsuarios);
router.get('/:id', usuarios_controller_1.getUsuarioById);
router.post('/', usuarios_controller_1.postUsuario);
router.put('/:id', usuarios_controller_1.putUsuario);
// router.delete('/:id',     deleteUsuario );
router.put('/status/:id', usuarios_controller_1.updateEstatusUsuarios);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map