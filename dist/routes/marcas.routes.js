"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcas_controller_1 = require("../controllers/marcas.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_role_1 = require("../middlewares/validar-role");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', marcas_controller_1.getMarcas);
router.get('/:id', marcas_controller_1.getMarcasById);
router.get('/tipo/:id', marcas_controller_1.getMarcasByTipo);
router.post('/', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], marcas_controller_1.postMarcas);
router.put('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], marcas_controller_1.putMarcas);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], marcas_controller_1.deleteMarcas);
router.put('/status/:id', [validar_jwt_1.validarJWT, validar_role_1.esAdminRole], marcas_controller_1.updateEstatusMarcas);
exports.default = router;
//# sourceMappingURL=marcas.routes.js.map