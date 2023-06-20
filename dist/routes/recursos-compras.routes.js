"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recursos_compras_controller_1 = require("../controllers/recursos-compras.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', recursos_compras_controller_1.getRecursosCompras);
router.get('/estatus/', recursos_compras_controller_1.getRecursosComprasEstatus);
router.get('/:id', recursos_compras_controller_1.getRecursosComprasById);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], recursos_compras_controller_1.postRecursosCompras);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], recursos_compras_controller_1.putRecursosCompras);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], recursos_compras_controller_1.deleteRecursosCompras);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], recursos_compras_controller_1.updateEstatusRecursosCompras);
exports.default = router;
//# sourceMappingURL=recursos-compras.routes.js.map