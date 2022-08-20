"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipos_controller_1 = require("../controllers/tipos.controller");
const router = (0, express_1.Router)();
router.get('/', tipos_controller_1.getTipos);
router.get('/:id', tipos_controller_1.getTiposById);
router.post('/', tipos_controller_1.postTipos);
router.put('/:id', tipos_controller_1.putTipos);
//  router.delete('/:id',     deleteTipos );
router.put('/status/:id', tipos_controller_1.updateEstatusPuestos);
exports.default = router;
//# sourceMappingURL=tipos.routes.js.map