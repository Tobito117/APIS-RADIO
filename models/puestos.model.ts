import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Puestos = db.define('puestos', {
    id_puesto: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    fk_corporacion: {
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

export default Puestos;