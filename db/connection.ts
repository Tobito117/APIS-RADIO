import { Sequelize } from 'sequelize';


// const db = new Sequelize('radiocomu', 'system', 'Aldebaran619*', {
const db = new Sequelize('radicomu', 'system', 'Aldebaran619*', {
    host: '10.30.1.44',
    dialect: 'mysql',
    // logging: false,
});

export default db;
