"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const corporaciones_controller_1 = require("../controllers/corporaciones.controller");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );
router.get('/', corporaciones_controller_1.getCorporaciones);
router.get('/:id', corporaciones_controller_1.getCorporacionesById);
router.post('/', corporaciones_controller_1.postCorporaciones);
router.put('/:id', corporaciones_controller_1.putCorporaciones);
router.delete('/:id', corporaciones_controller_1.deleteCorporaciones);
router.put('/status/:id', corporaciones_controller_1.updateEstatusCorporaciones);
exports.default = router;
//# sourceMappingURL=corporaciones.routes.js.map