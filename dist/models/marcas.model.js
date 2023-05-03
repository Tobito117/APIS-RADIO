"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Marcas = connection_1.default.define('marcas', {
    idmarcas: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreMarcas: {
        type: sequelize_1.DataTypes.STRING
    },
    nombreModelos: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo: {
        type: sequelize_1.DataTypes.INTEGER,
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
exports.default = Marcas;
//# sourceMappingURL=marcas.model.js.map