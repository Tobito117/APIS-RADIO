"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculos_controller_1 = require("../controllers/vehiculos.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', vehiculos_controller_1.getVehiculos);
router.get('/:id', vehiculos_controller_1.getVehiculosById);
router.post('/', vehiculos_controller_1.postVehiculos);
router.put('/:id', vehiculos_controller_1.putVehiculos);
router.delete('/:id', vehiculos_controller_1.deleteVehiculos);
router.put('/status/:id', vehiculos_controller_1.updateEstatusVehiculos);
exports.default = router;
//# sourceMappingURL=vehiculos.routes.js.map