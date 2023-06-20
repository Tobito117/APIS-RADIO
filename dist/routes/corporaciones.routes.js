"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const corporaciones_controller_1 = require("../controllers/corporaciones.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', corporaciones_controller_1.getCorporaciones);
router.get('/estatus/', corporaciones_controller_1.getCorporacionesEstatus);
router.get('/:id', corporaciones_controller_1.getCorporacionesById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], corporaciones_controller_1.postCorporaciones);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], corporaciones_controller_1.putCorporaciones);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], corporaciones_controller_1.deleteCorporaciones);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], corporaciones_controller_1.updateEstatusCorporaciones);
exports.default = router;
//# sourceMappingURL=corporaciones.routes.js.map