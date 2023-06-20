"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const radios_controller_1 = require("../controllers/radios.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', radios_controller_1.getRadios);
router.get('/filtrado/', radios_controller_1.getRadiosFiltrado);
router.get('/:id', radios_controller_1.getRadiosById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], radios_controller_1.postRadios);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], radios_controller_1.putRadios);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], radios_controller_1.deleteRadios);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], radios_controller_1.updateEstatusRadios);
exports.default = router;
//# sourceMappingURL=radios.routes.js.map