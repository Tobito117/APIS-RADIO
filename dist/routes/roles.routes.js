"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_controller_1 = require("../controllers/roles.controller");
const router = (0, express_1.Router)();
router.get('/', roles_controller_1.getRoles);
router.get('/:id', roles_controller_1.getRolesById);
router.post('/', roles_controller_1.postRoles);
router.put('/:id', roles_controller_1.putRoles);
//  router.delete('/:id',     deleteTipos );
router.put('/status/:id', roles_controller_1.updateEstatusRoles);
exports.default = router;
//# sourceMappingURL=roles.routes.js.map