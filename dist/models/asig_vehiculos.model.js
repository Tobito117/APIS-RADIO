"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asig_Vehiculos = connection_1.default.define('asig_vehiculos', {
    id_asigveh: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_asigveh: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_canveh: {
        type: sequelize_1.DataTypes.DATE
    },
    fk_vehiculo: {
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
exports.default = Asig_Vehiculos;
//# sourceMappingURL=asig_vehiculos.model.js.map