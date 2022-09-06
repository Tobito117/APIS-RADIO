"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Tipos = connection_1.default.define('tipos', {
    idtipos: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreTipo: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcionTipo: {
        type: sequelize_1.DataTypes.STRING
    },
    subNombre: {
        type: sequelize_1.DataTypes.STRING
    },
    subDescripcion: {
        type: sequelize_1.DataTypes.STRING
    },
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
exports.default = Tipos;
//# sourceMappingURL=tipos.model.js.map