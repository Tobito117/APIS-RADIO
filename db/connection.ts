import { Sequelize } from 'sequelize';


const db = new Sequelize('radiocomu', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
