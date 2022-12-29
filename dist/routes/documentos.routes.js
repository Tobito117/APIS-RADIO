"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentos_controller_1 = require("../controllers/documentos.controller");
const router = (0, express_1.Router)();
router.get('/', documentos_controller_1.getDocumentos);
router.get('/:id', documentos_controller_1.getDocumentosById);
router.post('/', documentos_controller_1.postDocumentos);
router.put('/:id', [], documentos_controller_1.putDocumentos);
router.delete('/:id', documentos_controller_1.deleteDocumentos);
router.put('/status/:id', documentos_controller_1.updateEstatusDocumentos);
exports.default = router;
//# sourceMappingURL=documentos.routes.js.map