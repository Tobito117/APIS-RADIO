"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Vehiculos = connection_1.default.define('vehiculos', {
    idvehiculo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreVehiculo: {
        type: sequelize_1.DataTypes.STRING
    },
    placa: {
        type: sequelize_1.DataTypes.STRING
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    anio: {
        type: sequelize_1.DataTypes.STRING
    },
    marcas_idmarcas: {
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
exports.default = Vehiculos;
//# sourceMappingURL=vehiculos.model.js.map