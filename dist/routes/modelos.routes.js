"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelos_controller_1 = require("../controllers/modelos.controller");
const router = (0, express_1.Router)();
router.get('/', modelos_controller_1.getModelos);
router.get('/:id', modelos_controller_1.getModelosById);
router.post('/', modelos_controller_1.postModelos);
router.put('/:id', modelos_controller_1.putModelos);
router.delete('/:id', modelos_controller_1.deleteModelos);
router.put('/status/:id', modelos_controller_1.updateEstatusModelos);
exports.default = router;
//# sourceMappingURL=modelos.routes.js.map