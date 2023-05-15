"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Radios = connection_1.default.define('radios', {
    idradios: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: {
        type: sequelize_1.DataTypes.INTEGER
    },
    serie: {
        type: sequelize_1.DataTypes.STRING
    },
    logico: {
        type: sequelize_1.DataTypes.STRING
    },
    inventario_interno: {
        type: sequelize_1.DataTypes.STRING
    },
    inventario_segpub: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_propietario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_recurso_compra: {
        type: sequelize_1.DataTypes.INTEGER
    },
    contrato_compra: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_marca: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fecha_baja: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_actualizacion: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_asignacion: {
        type: sequelize_1.DataTypes.DATE
    },
    observaciones: {
        type: sequelize_1.DataTypes.TEXT
    },
    fecha_recepcion: {
        type: sequelize_1.DataTypes.DATE
    },
    situacion: {
        type: sequelize_1.DataTypes.STRING
    },
    ubicacion: {
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
    },
});
exports.default = Radios;
//# sourceMappingURL=radios.model.js.map