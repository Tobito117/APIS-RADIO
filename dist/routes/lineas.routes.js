"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineas_controller_1 = require("../controllers/lineas.controller");
const router = (0, express_1.Router)();
router.get('/', lineas_controller_1.getLineas);
router.get('/:id', lineas_controller_1.getLineasById);
router.post('/', lineas_controller_1.postLineas);
router.put('/:id', lineas_controller_1.putLineas);
router.delete('/:id', lineas_controller_1.deleteLineas);
router.put('/status/:id', lineas_controller_1.updateEstatusLineas);
exports.default = router;
//# sourceMappingURL=lineas.routes.js.map