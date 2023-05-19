"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asig_Usuarios = connection_1.default.define('asignaciones', {
    idasignacion: {
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
    fk_accesorio_cargador: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_accesorio_bateria: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_accesorio_gps: {
        type: sequelize_1.DataTypes.INTEGER
    },
    funda: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    antena: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    bocina: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    c2h: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    cable_principal: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    caratula: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    micro: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    cofre: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    porta_caratula: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    cuello_cisne: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    fk_vehiculo: {
        type: sequelize_1.DataTypes.INTEGER
    },
    rfsi: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_asignacion: {
        type: sequelize_1.DataTypes.DATE
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
exports.default = Asig_Usuarios;
//# sourceMappingURL=asig_usuario_radio.model.js.map