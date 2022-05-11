"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asig_accesorios_controller_1 = require("../controllers/asig_accesorios.controller");
const router = (0, express_1.Router)();
router.get('/', asig_accesorios_controller_1.getAsig_Accesorios);
router.get('/:id', asig_accesorios_controller_1.getAsig_AccesoriosById);
router.post('/', asig_accesorios_controller_1.postAsig_Accesorios);
router.put('/:id', asig_accesorios_controller_1.putAsig_Accesorios);
router.delete('/:id', asig_accesorios_controller_1.deleteAsig_Accesorios);
router.put('/status/:id', asig_accesorios_controller_1.updateEstatusAsig_Accesorios);
exports.default = router;
//# sourceMappingURL=asig_accesorios.routes.js.map