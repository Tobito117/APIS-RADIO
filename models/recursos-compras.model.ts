import { DataTypes } from 'sequelize';
import db from '../db/connection';

const RecursosCompras = db.define('recursocompras', {
    idrecursoCompras: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombreRecursoCompra: {
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

export default RecursosCompras;