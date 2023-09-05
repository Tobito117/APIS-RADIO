"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const documentos_controller_1 = require("../controllers/documentos.controller");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_archivo_1 = __importDefault(require("../middlewares/validar-archivo"));
const router = (0, express_1.Router)();
router.get('/', documentos_controller_1.getDocumentos);
router.get('/ine', documentos_controller_1.getDocumentosTipoIne);
router.get('/cuip', documentos_controller_1.getDocumentosTipoCuip);
router.get('/:id', documentos_controller_1.getDocumentosById);
router.post('/', validar_archivo_1.default, documentos_controller_1.postDocumentos);
router.post('/ine', validar_archivo_1.default, documentos_controller_1.postDocumentosIne);
router.post('/cuip', validar_archivo_1.default, documentos_controller_1.postDocumentosCuip);
router.post('/evidencia', validar_archivo_1.default, documentos_controller_1.postDocumentosEvidencia);
router.put('/:coleccion/:id', [validar_archivo_1.default,
    (0, express_validator_1.check)('coleccion').custom(c => (0, db_validators_1.coleccionesPermitidas)(c, ['users'])),
    validar_campos_1.default], documentos_controller_1.putDocumentos);
router.delete('/:id', documentos_controller_1.deleteDocumentos);
router.put('/status/:id', documentos_controller_1.updateEstatusDocumentos);
router.get('/:coleccion/:id', [
    (0, express_validator_1.check)('coleccion').custom(c => (0, db_validators_1.coleccionesPermitidas)(c, ['users'])),
    validar_campos_1.default
], documentos_controller_1.mostrarImange);
exports.default = router;
//# sourceMappingURL=documentos.routes.js.map