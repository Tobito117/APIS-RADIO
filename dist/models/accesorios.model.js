"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Accesorios = connection_1.default.define('accesorios', {
    id_accesorio: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    num_serie: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_tipo_accesorio: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fk_linea: {
        type: sequelize_1.DataTypes.INTEGER
    },
    inventario_interno: {
        type: sequelize_1.DataTypes.STRING
    },
    inventario_segpub: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_recurso_compra: {
        type: sequelize_1.DataTypes.INTEGER
    },
    contrato_compra: {
        type: sequelize_1.DataTypes.STRING
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING
    },
    fk_status_ubicacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fecha_recepcion: {
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
exports.default = Accesorios;
//# sourceMappingURL=accesorios.model.js.map