import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Corporaciones = db.define('corporaciones', {
    id_corporacion: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    siglas: {
        type: DataTypes.STRING
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

export default Corporaciones;