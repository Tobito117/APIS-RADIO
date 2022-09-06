import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Servicios = db.define('servicios', {
    idservicios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombreServicios: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
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

export default Servicios;