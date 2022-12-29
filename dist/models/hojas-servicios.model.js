"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const HojasServicios = connection_1.default.define('hojaservicios', {
    idhojaservicios: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fk_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_idservicios: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_idradios: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_idaccesorios: {
        type: sequelize_1.DataTypes.INTEGER
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    entrego_equipo: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    fecha_entrega: {
        type: sequelize_1.DataTypes.DATE
    },
    fk_supervisortec: {
        type: sequelize_1.DataTypes.INTEGER
    },
    usuario_servicio: {
        type: sequelize_1.DataTypes.STRING
    },
    usuario_entrega: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_tecnico_entrega: {
        type: sequelize_1.DataTypes.INTEGER
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
exports.default = HojasServicios;
//# sourceMappingURL=hojas-servicios.model.js.map