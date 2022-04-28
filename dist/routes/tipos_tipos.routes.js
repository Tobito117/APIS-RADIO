"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipos_tipos_controller_1 = require("../controllers/tipos_tipos.controller");
const router = (0, express_1.Router)();
router.get('/', tipos_tipos_controller_1.getTipos_Tipos);
router.get('/:id', tipos_tipos_controller_1.getTipos_TiposById);
router.post('/', tipos_tipos_controller_1.postTipos_Tipos);
router.put('/:id', tipos_tipos_controller_1.putTipos_Tipos);
router.delete('/:id', tipos_tipos_controller_1.deleteTipos_Tipos);
router.put('/status/:id', tipos_tipos_controller_1.updatedEstatusTipos_Tipos);
exports.default = router;
//# sourceMappingURL=tipos_tipos.routes.js.map