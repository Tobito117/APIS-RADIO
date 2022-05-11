"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenes_controller_1 = require("../controllers/imagenes.controller");
const router = (0, express_1.Router)();
router.get('/', imagenes_controller_1.getImagenes);
router.get('/:id', imagenes_controller_1.getImagenesById);
router.post('/', imagenes_controller_1.postImagenes);
router.put('/:id', imagenes_controller_1.putImagenes);
router.delete('/:id', imagenes_controller_1.deleteImagenes);
router.put('/status/:id', imagenes_controller_1.updateEstatusImagenes);
exports.default = router;
//# sourceMappingURL=imagenes.routes.js.map