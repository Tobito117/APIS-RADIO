"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zonasregiones_controller_1 = require("../controllers/zonasregiones.controller");
const router = (0, express_1.Router)();
router.get('/', zonasregiones_controller_1.getZonasRegiones);
router.get('/:id', zonasregiones_controller_1.getZonasRegionesById);
router.post('/', zonasregiones_controller_1.postZonasRegiones);
router.put('/:id', zonasregiones_controller_1.putZonasRegiones);
router.delete('/:id', zonasregiones_controller_1.deleteZonasRegiones);
router.put('/status/:id', zonasregiones_controller_1.updateEstatusZonasRegiones);
exports.default = router;
//# sourceMappingURL=zonasregiones.routes.js.map