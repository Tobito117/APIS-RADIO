"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hojas_servicios_controller_1 = require("../controllers/hojas-servicios.controller");
const router = (0, express_1.Router)();
router.get('/', hojas_servicios_controller_1.getHojasServicios);
router.get('/:id', hojas_servicios_controller_1.getHojasServiciosById);
router.post('/', hojas_servicios_controller_1.postHojasServicios);
router.put('/:id', hojas_servicios_controller_1.putHojasServicios);
router.delete('/:id', hojas_servicios_controller_1.deleteHojasServicios);
router.put('/status/:id', hojas_servicios_controller_1.updateEstatusHojasServicios);
exports.default = router;
//# sourceMappingURL=hojas-servicios.routes.js.map