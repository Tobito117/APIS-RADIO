import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ZonasRegiones = db.define('zonasregiones', {
    id_zona_region: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
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

export default ZonasRegiones;