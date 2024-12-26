import { Sequelize } from 'sequelize';


// const db = new Sequelize('radiocomu', 'system', 'Aldebaran619*', {
const db = new Sequelize('radiocomu', 'root', 'Tecnologia10', {
    host: '10.30.1.31',
    dialect: 'mysql',
    // logging: false,
});

export default db;
