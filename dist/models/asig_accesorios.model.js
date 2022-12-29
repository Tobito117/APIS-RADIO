"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asig_Accesorios = connection_1.default.define('asig_accesorios', {
    id_asigacc: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha_asigacc: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_canacc: {
        type: sequelize_1.DataTypes.DATE
    },
    fk_accesorio: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_radio: {
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
exports.default = Asig_Accesorios;
//# sourceMappingURL=asig_accesorios.model.js.map