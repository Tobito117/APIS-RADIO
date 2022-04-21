"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const connection_1 = __importDefault(require("../db/connection"));
const Vehiculos = connection_1.default.define('vehiculos', {
    id_vehiculo: {
        type: types_1.DataTypes.INTEGER,
        primaryKey: true
    },
    placa: {
        type: types_1.DataTypes.STRING
    },
    color: {
        type: types_1.DataTypes.STRING,
    },
    fk_tipovehiculo: {
        type: types_1.DataTypes.INTEGER
    },
    fk_linea: {
        type: types_1.DataTypes.INTEGER
    },
    fk_modelo: {
        type: types_1.DataTypes.INTEGER
    },
    fk_status: {
        type: types_1.DataTypes.INTEGER
    }
});
exports.default = Vehiculos;
//# sourceMappingURL=vehiculos.js.map