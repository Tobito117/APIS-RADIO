"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenes_controller_1 = require("../controllers/imagenes.controller");
const validar_role_1 = require("../middlewares/validar-role");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', imagenes_controller_1.getImagenes);
router.get('/:id', imagenes_controller_1.getImagenesById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], imagenes_controller_1.postImagenes);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], imagenes_controller_1.putImagenes);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], imagenes_controller_1.deleteImagenes);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], imagenes_controller_1.updateEstatusImagenes);
exports.default = router;
//# sourceMappingURL=imagenes.routes.js.map