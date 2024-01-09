"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const db = new Sequelize('radiocomu', 'system', 'Aldebaran619*', {
const db = new sequelize_1.Sequelize('radicomu', 'root', 'yuliAna0606*', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map