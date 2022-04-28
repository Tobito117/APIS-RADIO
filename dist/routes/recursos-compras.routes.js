"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recursos_compras_controller_1 = require("../controllers/recursos-compras.controller");
const router = (0, express_1.Router)();
router.get('/', recursos_compras_controller_1.getRecursosCompras);
router.get('/:id', recursos_compras_controller_1.getRecursosComprasById);
router.post('/', recursos_compras_controller_1.postRecursosCompras);
router.put('/:id', recursos_compras_controller_1.putRecursosCompras);
router.delete('/:id', recursos_compras_controller_1.deleteRecursosCompras);
router.put('/status/:id', recursos_compras_controller_1.updateEstatusRecursosCompras);
exports.default = router;
//# sourceMappingURL=recursos-compras.routes.js.map