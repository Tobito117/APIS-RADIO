"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esAdminRole = void 0;
const esAdminRole = (req, res, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }
    const { roles_idrol, username } = req.user;
    if (roles_idrol > 2) {
        return res.status(401).json({
            msg: ` ${username} no es administrador - no puede hacer eso`
        });
    }
    next();
};
exports.esAdminRole = esAdminRole;
//# sourceMappingURL=validar-role.js.map