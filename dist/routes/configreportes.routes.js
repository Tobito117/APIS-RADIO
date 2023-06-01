"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configreportes_controller_1 = require("../controllers/configreportes.controller");
const router = (0, express_1.Router)();
router.get('/', configreportes_controller_1.getConfigReportes);
router.get('/estatus/', configreportes_controller_1.getConfigReportesByStatus);
router.get('/:id', configreportes_controller_1.getConfigReportesById);
router.post('/', configreportes_controller_1.postConfigReportes);
router.put('/:id', configreportes_controller_1.putConfigReportes);
router.delete('/:id', configreportes_controller_1.deleteConfigReportes);
router.put('/status/:id', configreportes_controller_1.updateEstatusConfigReportes);
exports.default = router;
//# sourceMappingURL=configreportes.routes.js.map