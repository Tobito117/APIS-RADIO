"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const RecursosCompras = connection_1.default.define('recursocompras', {
    idrecursoCompras: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreRecursoCompra: {
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
exports.default = RecursosCompras;
//# sourceMappingURL=recursos-compras.model.js.map