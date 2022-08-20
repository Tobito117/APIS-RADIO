"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Sue = connection_1.default.define('situacion_ubicacion_estatus', {
    id_sue: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombreStatus: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Sue;
//# sourceMappingURL=status.model.js.map