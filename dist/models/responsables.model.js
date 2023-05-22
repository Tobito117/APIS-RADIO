"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Responsables = connection_1.default.define('responsables', {
    idResponsable: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_patResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_matResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre_completoResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_puestoResponsable: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idpuestoResponsable: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombrePuestoResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_corporacionResponsable: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idcorporacionesResponsable: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombreCorporacionResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    cuipResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    clave_electorresponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    imagen_ineResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    imagen_cuipResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    tituloResponsable: {
        type: sequelize_1.DataTypes.STRING
    },
    estatusResponsable: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Responsables;
//# sourceMappingURL=responsables.model.js.map