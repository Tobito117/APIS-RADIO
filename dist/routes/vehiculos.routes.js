"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculos_controller_1 = require("../controllers/vehiculos.controller");
const router = (0, express_1.Router)();
router.get('/', vehiculos_controller_1.getVehiculos);
router.get('/:id', vehiculos_controller_1.getVehiculosById);
router.post('/', vehiculos_controller_1.postVehiculos);
router.put('/:id', vehiculos_controller_1.putVehiculos);
router.delete('/:id', vehiculos_controller_1.deleteVehiculos);
router.put('/status/:id', vehiculos_controller_1.updateEstatusVehiculos);
exports.default = router;
//# sourceMappingURL=vehiculos.routes.js.map