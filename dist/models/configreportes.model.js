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
    articulo1: {
        type: sequelize_1.DataTypes.TEXT
    },
    articulo2: {
        type: sequelize_1.DataTypes.TEXT
    },
    articulo3: {
        type: sequelize_1.DataTypes.TEXT
    },
    articulo4: {
        type: sequelize_1.DataTypes.STRING
    },
    articulo5: {
        type: sequelize_1.DataTypes.STRING
    },
    articulo6: {
        type: sequelize_1.DataTypes.STRING
    },
    articulo7: {
        type: sequelize_1.DataTypes.STRING
    },
    logoc4: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_logo_c4: {
        type: sequelize_1.DataTypes.INTEGER
    },
    logo_ssypc: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_logo_ssypc: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_revisor: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_responsable_entrega: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ccp_carta: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_inicial: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_final: {
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