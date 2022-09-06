"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Imagenes = connection_1.default.define('imagenes', {
    idimagen: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    ruta: {
        type: sequelize_1.DataTypes.STRING
    },
    asignacion: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_creacion: {
        type: sequelize_1.DataTypes.DATE
    },
    tipos_idtipos: {
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
exports.default = Imagenes;
//# sourceMappingURL=imagenes.model.js.map