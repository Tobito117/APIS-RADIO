"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestos_controller_1 = require("../controllers/puestos.controller");
const router = (0, express_1.Router)();
router.get('/', puestos_controller_1.getPuestos);
router.get('/:id', puestos_controller_1.getPuestosById);
router.post('/', puestos_controller_1.postPuestos);
router.put('/:id', puestos_controller_1.putPuestos);
router.delete('/:id', puestos_controller_1.deletePuestos);
router.put('/status/:id', puestos_controller_1.updateEstatusPuestos);
exports.default = router;
//# sourceMappingURL=puestos.routes.js.map