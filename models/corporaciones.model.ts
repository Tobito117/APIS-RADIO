import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Corporaciones = db.define('corporaciones', {
    idcorporaciones: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombreCorporacion: {
        type: DataTypes.STRING
    },
    siglasCorporacion: {
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

export default Corporaciones;