"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configreportes_controller_1 = require("../controllers/configreportes.controller");
const validar_role_1 = require("../middlewares/validar-role");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', configreportes_controller_1.getConfigReportes);
router.get('/estatus/', configreportes_controller_1.getConfigReportesByStatus);
router.get('/:id', configreportes_controller_1.getConfigReportesById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], configreportes_controller_1.postConfigReportes);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], configreportes_controller_1.putConfigReportes);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], configreportes_controller_1.deleteConfigReportes);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], configreportes_controller_1.updateEstatusConfigReportes);
exports.default = router;
//# sourceMappingURL=configreportes.routes.js.map