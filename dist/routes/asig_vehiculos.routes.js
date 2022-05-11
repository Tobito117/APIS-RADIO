"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asig_vehiculos_controller_1 = require("../controllers/asig_vehiculos.controller");
const router = (0, express_1.Router)();
router.get('/', asig_vehiculos_controller_1.getAsig_Vehiculos);
router.get('/:id', asig_vehiculos_controller_1.getAsig_VehiculosById);
router.post('/', asig_vehiculos_controller_1.postAsig_Vehiculos);
router.put('/:id', asig_vehiculos_controller_1.putAsig_Vehiculos);
router.delete('/:id', asig_vehiculos_controller_1.deleteAsig_Vehiculos);
router.put('/status/:id', asig_vehiculos_controller_1.updateEstatusAsig_Vehiculos);
exports.default = router;
//# sourceMappingURL=asig_vehiculos.routes.js.map