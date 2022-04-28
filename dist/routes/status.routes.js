"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const status_controller_1 = require("../controllers/status.controller");
const router = (0, express_1.Router)();
router.get('/', status_controller_1.getStatus);
router.get('/:id', status_controller_1.getStatusById);
router.post('/', status_controller_1.postStatus);
router.put('/:id', status_controller_1.putStatus);
router.delete('/:id', status_controller_1.deleteStatus);
exports.default = router;
//# sourceMappingURL=status.routes.js.map