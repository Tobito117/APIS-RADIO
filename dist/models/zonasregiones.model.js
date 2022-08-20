"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ZonasRegiones = connection_1.default.define('zonasregiones', {
    idzonasregiones: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreZonasRegiones: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcionZonasRegiones: {
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
exports.default = ZonasRegiones;
//# sourceMappingURL=zonasregiones.model.js.map