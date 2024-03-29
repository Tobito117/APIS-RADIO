"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestos_controller_1 = require("../controllers/puestos.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', puestos_controller_1.getPuestos);
router.get('/estatus/', puestos_controller_1.getPuestosEstatus);
router.get('/:id', puestos_controller_1.getPuestosById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], puestos_controller_1.postPuestos);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], puestos_controller_1.putPuestos);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], puestos_controller_1.deletePuestos);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], puestos_controller_1.updateEstatusPuestos);
exports.default = router;
//# sourceMappingURL=puestos.routes.js.map