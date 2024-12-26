"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asig_Usuarios = connection_1.default.define('asignaciones', {
    idasignacion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuarios_idusuarios: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_armar: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: true
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_asignacion: {
        type: sequelize_1.DataTypes.DATE
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
exports.default = Asig_Usuarios;
//# sourceMappingURL=asig_usuario_radio.model.js.map