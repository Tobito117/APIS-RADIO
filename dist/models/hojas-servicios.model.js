"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const HojasServicios = connection_1.default.define('hojaservicios', {
    id_hoja_servicio: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_servicio: {
        type: sequelize_1.DataTypes.DATE
    },
    fk_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_servicio: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_radio: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_accesorio: {
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
    hora_entrega: {
        type: sequelize_1.DataTypes.TIME
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
    fk_status: {
        type: sequelize_1.DataTypes.INTEGER
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