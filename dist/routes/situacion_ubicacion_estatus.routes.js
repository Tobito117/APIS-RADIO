"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const situacion_ubicacion_estatus_controller_1 = require("../controllers/situacion_ubicacion_estatus.controller");
const router = (0, express_1.Router)();
router.get('/', situacion_ubicacion_estatus_controller_1.getStatus);
router.get('/:id', situacion_ubicacion_estatus_controller_1.getStatusById);
router.post('/', situacion_ubicacion_estatus_controller_1.postStatus);
router.put('/:id', situacion_ubicacion_estatus_controller_1.putStatus);
router.delete('/:id', situacion_ubicacion_estatus_controller_1.deleteStatus);
exports.default = router;
//# sourceMappingURL=situacion_ubicacion_estatus.routes.js.map