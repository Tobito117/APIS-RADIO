"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Documentos = connection_1.default.define('documentos', {
    id_documentos: {
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
    ruta: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    tamanio: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.TINYINT
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_asignacion: {
        type: sequelize_1.DataTypes.INTEGER
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