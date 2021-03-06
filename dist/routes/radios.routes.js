"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const radios_controller_1 = require("../controllers/radios.controller");
const router = (0, express_1.Router)();
router.get('/', radios_controller_1.getRadios);
router.get('/:id', radios_controller_1.getRadiosById);
router.post('/', radios_controller_1.postRadios);
router.put('/:id', radios_controller_1.putRadios);
router.delete('/:id', radios_controller_1.deleteRadios);
router.put('/status/:id', radios_controller_1.updateEstatusRadios);
exports.default = router;
//# sourceMappingURL=radios.routes.js.map