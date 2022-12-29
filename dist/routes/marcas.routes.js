"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcas_controller_1 = require("../controllers/marcas.controller");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );
router.get('/', marcas_controller_1.getMarcas);
router.get('/:id', marcas_controller_1.getMarcasById);
router.post('/', marcas_controller_1.postMarcas);
router.put('/:id', marcas_controller_1.putMarcas);
router.delete('/:id', marcas_controller_1.deleteMarcas);
router.put('/status/:id', marcas_controller_1.updateEstatusMarcas);
exports.default = router;
//# sourceMappingURL=marcas.routes.js.map