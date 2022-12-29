import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Tipos = db.define('tipos', {
    idtipos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombreTipo: {
        type: DataTypes.STRING
    },
    descripcionTipo: {
        type: DataTypes.STRING
      },
    subNombre: {
        type: DataTypes.STRING
      },
    subDescripcion: {
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

export default Tipos;