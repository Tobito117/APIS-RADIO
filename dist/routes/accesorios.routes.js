"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accesorios_controller_1 = require("../controllers/accesorios.controller");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
router.use(validar_jwt_1.validarJWT);
router.get('/', accesorios_controller_1.getAccesorios);
router.get('/:id', accesorios_controller_1.getAccesoriosById);
router.post('/', accesorios_controller_1.postAccesorios);
router.put('/:id', accesorios_controller_1.putAccesorios);
router.delete('/:id', accesorios_controller_1.deleteAccesorios);
router.put('/status/:id', accesorios_controller_1.updateEstatusAccesorios);
exports.default = router;
//# sourceMappingURL=accesorios.routes.js.map