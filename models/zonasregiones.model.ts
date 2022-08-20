import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ZonasRegiones = db.define('zonasregiones', {
    idzonasregiones: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombreZonasRegiones: {
        type: DataTypes.STRING
    },
    descripcionZonasRegiones: {
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

export default ZonasRegiones;