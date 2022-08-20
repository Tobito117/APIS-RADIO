"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Corporaciones = connection_1.default.define('corporaciones', {
    idcorporaciones: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreCorporacion: {
        type: sequelize_1.DataTypes.STRING
    },
    siglasCorporacion: {
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
exports.default = Corporaciones;
//# sourceMappingURL=corporaciones.model.js.map