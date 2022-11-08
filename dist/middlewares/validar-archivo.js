"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validarArchivoSubir = (req, res, next) => {
    var _a;
    if (!req.files || Object.keys(req.files).length === 0 || !((_a = req.files) === null || _a === void 0 ? void 0 : _a.archivo)) {
        res.status(400).json({ msg: 'No hay archivos que subir - archivo' });
        return;
    }
    next();
};
exports.default = validarArchivoSubir;
//# sourceMappingURL=validar-archivo.js.map