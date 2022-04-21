"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('User', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    auth_key: {
        type: sequelize_1.DataTypes.STRING
    },
    password_hash: {
        type: sequelize_1.DataTypes.STRING
    },
    confirmation_token: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER
    },
    superadmin: {
        type: sequelize_1.DataTypes.SMALLINT
    },
    created_at: {
        type: sequelize_1.DataTypes.INTEGER
    },
    updated_at: {
        type: sequelize_1.DataTypes.INTEGER
    },
    registration_ip: {
        type: sequelize_1.DataTypes.STRING
    },
    bind_to_ip: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    email_confirmed: {
        type: sequelize_1.DataTypes.SMALLINT
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = User;
//# sourceMappingURL=usuario.js.map