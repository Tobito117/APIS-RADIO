"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ZonasRegiones = connection_1.default.define('zonasregiones', {
    id_zona_region: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
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
exports.default = ZonasRegiones;
//# sourceMappingURL=zonasregiones.model.js.map