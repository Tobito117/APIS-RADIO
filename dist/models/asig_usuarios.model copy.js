"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asig_Usuarios = connection_1.default.define('asig_usuarios', {
    id_asigusu: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha_asigusu: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_canusu: {
        type: sequelize_1.DataTypes.DATE
    },
    fk_usuario: {
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
exports.default = Asig_Usuarios;
//# sourceMappingURL=asig_usuarios.model%20copy.js.map