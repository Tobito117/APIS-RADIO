"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_controller_1 = require("../controllers/roles.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', roles_controller_1.getRoles);
router.get('/estatus/', roles_controller_1.getRolesEstatus);
router.get('/:id', roles_controller_1.getRolesById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], roles_controller_1.postRoles);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], roles_controller_1.putRoles);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], roles_controller_1.deleteTipos);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], roles_controller_1.updateEstatusRoles);
exports.default = router;
//# sourceMappingURL=roles.routes.js.map