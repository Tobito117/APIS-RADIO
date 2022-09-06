"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuarios = connection_1.default.define('usuarios', {
    idusuarios: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_pat: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_mat: {
        type: sequelize_1.DataTypes.STRING
    },
    cuip: {
        type: sequelize_1.DataTypes.STRING
    },
    clave_elector: {
        type: sequelize_1.DataTypes.STRING
    },
    imagen_ine: {
        type: sequelize_1.DataTypes.STRING
    },
    imagen_cuip: {
        type: sequelize_1.DataTypes.STRING
    },
    titulo: {
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
exports.default = Usuarios;
//# sourceMappingURL=usuarios.model.js.map