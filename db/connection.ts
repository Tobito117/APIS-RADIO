import { Sequelize } from 'sequelize';


// const db = new Sequelize('radiocomu', 'system', 'Aldebaran619*', {
const db = new Sequelize('radicomu', 'root', 'yuliAna0606*', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
