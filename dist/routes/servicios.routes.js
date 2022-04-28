"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicios_controller_1 = require("../controllers/servicios.controller");
const router = (0, express_1.Router)();
router.get('/', servicios_controller_1.getServicios);
router.get('/:id', servicios_controller_1.getServiciosById);
router.post('/', servicios_controller_1.postServicios);
router.put('/:id', servicios_controller_1.putServicios);
router.delete('/:id', servicios_controller_1.deleteServicios);
router.put('/status/:id', servicios_controller_1.updateEstatusServicios);
exports.default = router;
//# sourceMappingURL=servicios.routes.js.map