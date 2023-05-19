"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Accesorios = connection_1.default.define('accesorios', {
    idaccesorios: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    accesorio: {
        type: sequelize_1.DataTypes.STRING
    },
    serie_bateria: {
        type: sequelize_1.DataTypes.STRING
    },
    serie_cargador: {
        type: sequelize_1.DataTypes.STRING
    },
    serie_gps: {
        type: sequelize_1.DataTypes.STRING
    },
    marcas_idMarcas: {
        type: sequelize_1.DataTypes.INTEGER
    },
    inventario_interno: {
        type: sequelize_1.DataTypes.STRING
    },
    inventario_segpub: {
        type: sequelize_1.DataTypes.STRING
    },
    contrato_compra: {
        type: sequelize_1.DataTypes.STRING
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_recepcion: {
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
    },
});
exports.default = Accesorios;
//# sourceMappingURL=accesorios.model.js.map