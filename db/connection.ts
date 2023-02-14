import { Sequelize } from 'sequelize';


const db = new Sequelize('radiocomu', 'system', 'Aldebaran619*', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
