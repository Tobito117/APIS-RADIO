import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Puestos = db.define('puestos', {
    idpuesto: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    fk_corporacion: {
        type: DataTypes.INTEGER
      },
    estatus: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Puestos;