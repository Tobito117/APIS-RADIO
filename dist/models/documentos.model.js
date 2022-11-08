"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Documentos = connection_1.default.define('documentos', {
    iddocumentos: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_carga: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_actualizacion: {
        type: sequelize_1.DataTypes.DATE
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    // ruta: {
    //     type: DataTypes.STRING
    // },
    // tipo: {
    //     type: DataTypes.STRING
    // },
    // tamanio: {
    //     type: DataTypes.STRING
    // },
    // descripcion: {
    //     type: DataTypes.STRING
    // },
    estatus: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Documentos;
//# sourceMappingURL=documentos.model.js.map