import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Lineas = db.define('lineas', {
    id_linea: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    fk_marca: {
        type: DataTypes.INTEGER
      },
    fk_status: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Lineas;