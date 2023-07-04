"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hojas_servicios_controller_1 = require("../controllers/hojas-servicios.controller");
const validar_role_1 = require("../middlewares/validar-role");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', hojas_servicios_controller_1.getHojasServicios);
router.get('/ultimo/', hojas_servicios_controller_1.getHojasServiciosUltimo);
router.get('/:id', hojas_servicios_controller_1.getHojasServiciosById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], hojas_servicios_controller_1.postHojasServicios);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], hojas_servicios_controller_1.putHojasServicios);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], hojas_servicios_controller_1.deleteHojasServicios);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], hojas_servicios_controller_1.updateEstatusHojasServicios);
exports.default = router;
//# sourceMappingURL=hojas-servicios.routes.js.map