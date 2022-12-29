"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asig_Accesorios = connection_1.default.define('asig_accesorios', {
    idasig_tipo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha_asig: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_can: {
        type: sequelize_1.DataTypes.DATE
    },
    accesorios_idaccesorios: {
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
exports.default = Asig_Accesorios;
//# sourceMappingURL=asig_accesorios.model.js.map