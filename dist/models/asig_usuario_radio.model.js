"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const AUR = connection_1.default.define('asignacion_usuario_radio', {
    asignacion_usuario_radiocol: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuarios_idusuarios: {
        type: sequelize_1.DataTypes.INTEGER
    },
    radios_idradios: {
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
exports.default = AUR;
//# sourceMappingURL=asig_usuario_radio.model.js.map