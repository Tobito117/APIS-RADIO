"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Imagenes = connection_1.default.define('imagenes', {
    id_imagen: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    ruta: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_asignacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_tipoasignacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fecha_creacion: {
        type: sequelize_1.DataTypes.DATE
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
exports.default = Imagenes;
//# sourceMappingURL=imagenes.model.js.map