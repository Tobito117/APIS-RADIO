"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ConfigReportes = connection_1.default.define('configreportes', {
    idconfigReportes: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    encabezado_carta: {
        type: sequelize_1.DataTypes.STRING
    },
    encabezado2: {
        type: sequelize_1.DataTypes.STRING
    },
    encabezado_hservicio: {
        type: sequelize_1.DataTypes.STRING
    },
    logo1: {
        type: sequelize_1.DataTypes.STRING
    },
    logo2: {
        type: sequelize_1.DataTypes.STRING
    },
    articulo1: {
        type: sequelize_1.DataTypes.TEXT
    },
    articulo2: {
        type: sequelize_1.DataTypes.TEXT
    },
    articulo3: {
        type: sequelize_1.DataTypes.TEXT
    },
    fk_encargado_revision: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_entrego: {
        type: sequelize_1.DataTypes.INTEGER
    },
    pie_carta: {
        type: sequelize_1.DataTypes.STRING
    },
    pie_hservicio: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_inicial: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_creacion: {
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
exports.default = ConfigReportes;
//# sourceMappingURL=configreportes.model.js.map