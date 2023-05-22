"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const responsables_controller_1 = require("../controllers/responsables.controller");
const router = (0, express_1.Router)();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );
router.get('/', responsables_controller_1.getResponsables);
exports.default = router;
//# sourceMappingURL=responsables.routes.js.map