"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Vehiculos = connection_1.default.define('vehiculos', {
    id_vehiculo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    placa: {
        type: sequelize_1.DataTypes.STRING
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_tipovehiculo: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_linea: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_modelo: {
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
exports.default = Vehiculos;
//# sourceMappingURL=vehiculos.model.js.map